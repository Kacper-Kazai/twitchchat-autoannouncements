import React from "react";
import Panel from "../../../components/panels/panel";
import PlaceCenter from "../../../components/place_center";
import VerticalMenu from "../../../components/vertical_menu";
import { PANELS } from "../../dashboard";

const Settings = ({setPanel}) => {

    const LinkButton = ({id, label, children}) => {
        return (<button className="button" onClick={() => setPanel(id)}>{label || children}</button>)
    }

    return (
    <PlaceCenter>
        <Panel title={"Settings"}>
            <VerticalMenu>
                <LinkButton id={PANELS.TIMER} label="Timer" />
                <LinkButton id={PANELS.CHANNEL} label="Channel" />
                <LinkButton id={PANELS.ANNOUNCEMENTS} label="Announcement" />
            </VerticalMenu>
        </Panel>
    </PlaceCenter>
    );
}

export default Settings;