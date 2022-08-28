import React, { useEffect, useRef, useState } from "react";
import Header from "./dashboard/header";
import { useAuth } from "../providers/auth";
import Welcome from "./dashboard/panels/welcome";
import Menu from "./dashboard/panels/settings";
import Timer from "./dashboard/panels/timer";
import Channel from "./dashboard/panels/channel";
import Announcements from "./dashboard/panels/announcements";
import useLocalStorage from "../hooks/use_local_storage";

export const PANELS = {
    WELCOME: 0,
    SETTINGS: 1,
    TIMER: 2,
    CHANNEL: 3,
    ANNOUNCEMENTS: 4
}

const DashboardPage = () => {
    const { user, authorizedAPI } = useAuth();

    const [timer, setTimer] = useLocalStorage(`${user?.id}_timer`, 30);
    const [channelId, setChannelId] = useLocalStorage(`${user?.id}_channel`, user?.id);
    const [announcements, setAnnouncements] = useLocalStorage(`${user?.id}_announcements`, []);
    const [isEnabled, setIsEnabled] = useLocalStorage(`${user?.id}_is_enabled`, false)
    const lastSent = useRef(new Date());

    const [panel, setPanel] = useState();
    const panels = {
        [PANELS.WELCOME]: <Welcome isEnabled={isEnabled} setIsEnabled={setIsEnabled} lastSent={lastSent} timer={timer} setPanel={setPanel}/>,
        [PANELS.SETTINGS]: <Menu setPanel={setPanel} />,
        [PANELS.TIMER]: <Timer timer={timer} setTimer={setTimer} setPanel={setPanel} />,
        [PANELS.CHANNEL]: <Channel channelId={channelId} setChannelId={setChannelId} setPanel={setPanel} />,
        [PANELS.ANNOUNCEMENTS]: <Announcements announcements={announcements} setAnnouncements={setAnnouncements} setPanel={setPanel} />,
    }
    const Panel = panels[panel] || panels[PANELS.WELCOME];

    useEffect(() => {
        if(announcements.length === 0 && isEnabled){
            return setIsEnabled(false);
        };
    }, [announcements, isEnabled, setIsEnabled])

    useEffect(() => {
        if(!isEnabled) return;  
        const postAnnouncement = async (userId, broadcasterId, message) => {
            return await authorizedAPI.post(`/chat/announcements?broadcaster_id=${broadcasterId}&moderator_id=${userId}`, { message, color: `purple` })
        }

        const interval = setInterval(() => {
            const announcement = announcements[Math.floor((Math.random()*announcements.length))]

            postAnnouncement(user.id, channelId, announcement);

            lastSent.current = new Date();
        }, timer*1000);
        lastSent.current = new Date();
        return () => clearInterval(interval);
    }, [user, announcements, timer, channelId, authorizedAPI, isEnabled]);
    
    return (
    <div id="dashboard">
        <Header user={user} setPanelToWelcome={() => setPanel(PANELS.WELCOME)}/>
        {Panel}
    </div>
    );
}

export default DashboardPage;