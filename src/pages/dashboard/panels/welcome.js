import React, { useRef, useEffect, useCallback } from "react";
import MarginCenter from "../../../components/margin_center";
import Panel from "../../../components/panels/panel";
import PlaceCenter from "../../../components/place_center";
import VerticalMenu from "../../../components/vertical_menu";
import { PANELS } from "../../dashboard";

const Welcome = ({ isEnabled, setIsEnabled, lastSent, timer, setPanel }) => {
    const timerRef = useRef();

    const getDeltaTime = useCallback(() => {
        return Math.round(timer-(((new Date()).getTime() - lastSent.current.getTime())/1000)) + 's';
    }, [timer, lastSent]);

    useEffect(() => {
        if(!isEnabled) return;

        const clock = setInterval(() => {
            timerRef.current.textContent = getDeltaTime();
        }, 1000);

        return () => clearInterval(clock);
    }, [isEnabled, getDeltaTime]);

    return (
    <PlaceCenter>
        <div>
            <Panel title={"Status"}>
                <MarginCenter>
                    {isEnabled ? "Enabled" : "Disabled"}
                </MarginCenter>
            </Panel>
            <Panel title={"Next"}>
                <MarginCenter>
                    {isEnabled ? <div ref={timerRef}>N/A</div> : "N/A" }
                </MarginCenter>
            </Panel>
        </div>
        <Panel title={"Control"}>
            <VerticalMenu>
                <button className="button" onClick={() => setIsEnabled(!isEnabled)}>{isEnabled ? "Disable" : "Enable"}</button>
                <button className="button" onClick={() => setPanel(PANELS.SETTINGS)}>Settings</button>
            </VerticalMenu>
        </Panel>
    </PlaceCenter>
    );
}

export default Welcome;