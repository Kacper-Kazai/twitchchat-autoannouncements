import React from "react";
import PlaceCenter from "../components/place_center";
import VerticalMenu from "../components/vertical_menu";
import { useAuth } from "../providers/auth";

const LoginPage = () => {
    const auth = useAuth();

    return (
        <PlaceCenter>
            <VerticalMenu>
                <button
                    onClick={auth.login}
                    className="button"
                >
                    Login with Twitch
                </button>
            </VerticalMenu>
        </PlaceCenter>
    );
}

export default LoginPage;