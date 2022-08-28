import React, { useEffect, useState, useRef, useCallback } from "react";
import UserBanner from "../../../components/user_banner/index.js";
import { useAuth } from "../../../providers/auth.js";
import axios from "axios";
import Panel from "../../../components/panels/panel.js";
import PlaceCenter from "../../../components/place_center.js";
import FindIcon from "../../../components/icons/find_icon.js";
import SaveIcon from "../../../components/icons/save_icon.js";
import PanelMenu from "../../../components/panels/panel_menu.js";

const Channel = ({ channelId, setChannelId }) => {    
    const [channel, setChannel] = useState();

    const channelUsername = useRef();
    const [foundChannel, setFoundChannel] = useState(channel);

    const { authorizedAPI } = useAuth();

    useEffect(() => {
        const controller = new AbortController();
        authorizedAPI.get(`/users?id=${channelId}`, { signal: controller.signal }).then( ({ data }) => {
            const { data: users } = data;
            const user = users[0];
            setChannel(user);
            setFoundChannel(user);
        }).catch((err) => {
            if(axios.isCancel(err)) return;
            if(err?.response?.status === 401);
            throw err;
        });

        return () => {
            controller.abort();
        };
    }, [authorizedAPI, channelId]);

    const saveable = useCallback(() => {
        return foundChannel?.id !== undefined && foundChannel.id !== channelId;
    }, [foundChannel, channelId]);

    const findChannelByLogin = (e) => {
        e.preventDefault();
        const name = channelUsername.current.value;
        authorizedAPI.get(`/users?login=${name}`).then( ({ data }) => {
            const { data: users } = data;
            const user = users[0];
            setFoundChannel(user);
        }).catch((err) => {
            if(axios.isCancel(err)) return;
            if(err?.response?.status === 401);
            throw err;
        });
    }
    const saveChannel = (e) => {
        e.preventDefault();
        setChannelId(foundChannel.id);
    }
    
    return (
        <Panel title={"Channel"} subtitle={<UserBanner avatarUrl={channel?.profile_image_url} displayName={channel?.display_name} />}>
            <PlaceCenter>
                <div>
                    <PanelMenu onSubmit={findChannelByLogin}>
                        <input className="input" placeholder="Username goes here" ref={channelUsername}/>
                        <button className="button button-icon"><FindIcon /></button>
                    </PanelMenu>
                    <PanelMenu onSubmit={saveChannel}>
                        <UserBanner avatarUrl={foundChannel?.profile_image_url} displayName={foundChannel?.display_name} />
                        <button className={`button button-icon ${!saveable() ? "disabled" : ""}`}><SaveIcon /></button>
                    </PanelMenu>
                </div>
            </PlaceCenter>
        </Panel>
    );
}

export default Channel;