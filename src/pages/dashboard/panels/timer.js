import React, { useState, useCallback } from "react";
import Panel from "../../../components/panels/panel";
import PanelMenu from "../../../components/panels/panel_menu";
import PlaceCenter from "../../../components/place_center";
import SaveIcon from "../../../components/icons/save_icon";

const Timer = ({timer, setTimer}) => {

    const [timerEditor, setTimerEditor] = useState(timer);

    const saveTimer = (e) => {
        e.preventDefault();
        if(saveable()) setTimer(timerEditor);
    }

    const saveable = useCallback(() => {
        return timerEditor !== timer && timerEditor > 0;
    }, [timer, timerEditor]);


    return (
        <Panel title={"time"} subtitle={`${timer}s`}>
            <PlaceCenter>
                <PanelMenu onSubmit={saveTimer}>
                    <input type="number" value={timerEditor} placeholder="Time in seconds goes here" className="input" onChange={(e) => setTimerEditor(e.target.value)}/>
                    <button className={`button button-icon ${!saveable() ? "disabled" : ""}`}><SaveIcon /></button>
                </PanelMenu>
            </PlaceCenter>
        </Panel>
    );
}

export default Timer;