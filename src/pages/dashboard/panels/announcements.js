import React, { useRef } from "react";
import Panel from "../../../components/panels/panel";
import PanelMenu from "../../../components/panels/panel_menu";
import Scrollable from "../../../components/scrollable";
import AddIcon from "../../../components/icons/add_icon";
import DeleteIcon from "../../../components/icons/delete_icon";

const Announcements = ({announcements, setAnnouncements}) => {
    const announcementRef = useRef();

    const deleteAnnouncement = (id) => {
        setAnnouncements([...announcements.filter((_, index) => index !== id)]);
    }

    const Announcement = (message, id) =>{
        return (
            <div className="announcement" key={id}>
                <div className="announcement-title">
                    Announcement
                    <button className="button button-icon" onClick={() => deleteAnnouncement(id)}><DeleteIcon /></button>
                </div>
                <div className="announcement-content">
                    {message}
                </div>
            </div>
        )   
    }

    const addAnnouncement = (e) => {
        e.preventDefault();
        if(announcementRef.current.value === '') return;

        setAnnouncements([...announcements, announcementRef.current.value])

        announcementRef.current.value = '';
    }

    return (
        <Panel title={"Announcements"}>
            <Scrollable>
                {announcements.map((message, id) => Announcement(message, id))}
            </Scrollable>
            <PanelMenu onSubmit={ addAnnouncement }>
                <input placeholder="Announcement" className="input" ref={announcementRef}/>
                <button className="button button-icon"><AddIcon /></button>
            </PanelMenu>
        </Panel>
    );
}

export default Announcements;