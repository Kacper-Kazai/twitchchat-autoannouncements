import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import PlaceCenter from "../components/place_center";
import useLocalStorage from "../hooks/use_local_storage";

const AuthContext = React.createContext();
const clientId = "fnbx8d9tzty11ya7k5en59qgh82kir";
const twitchApiUrl = "https://api.twitch.tv/helix/";
const redirectUri = `https://kacper-kazai.github.io/twitchchat-autoannouncements/`;

const createAxios = (accessToken) => {
    if(!accessToken) return false;
    return axios.create({
        baseURL: twitchApiUrl,
        headers: {
            'Content-Type': 'application/json',
            'Client-Id': clientId,
            'Authorization': `Bearer ${accessToken}`,
        }
    })
}

function AuthProvider({ children, loginPage }) {
    const [accessToken, setAccessToken] = useLocalStorage(`access_token`, false);
    const getAuthorizedAPI = useCallback(() => {
        return createAxios(accessToken);
    }, [accessToken]);
    const [user, setUser] = useState(false);

    const login = () => {
        const scope = `moderator%3Amanage%3Aannouncements`;
        const url = `https://id.twitch.tv/oauth2/authorize?response_type=token&scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}`

        window.location.replace(url);
    }
    const loginByAccessToken = (accessToken) => {
        setUser(false);
        setAccessToken(accessToken);
    }
    const logout = useCallback(() => {
        return setAccessToken(false);
    }, [setAccessToken]);

    useEffect(() => {
        const hash = window.location.hash;
        const accessTokenFromHash = new URLSearchParams(hash).get('#access_token');
        
        if(!accessTokenFromHash) return;
        window.location.hash = '';

        if(accessToken) return;
        setAccessToken(accessTokenFromHash);
    }, [accessToken, setAccessToken]);

    useEffect(() => {
        if(!accessToken || user) return;

        const controller = new AbortController();
        getAuthorizedAPI().get('/users', { signal: controller.signal }).then( ({ data }) => {
            const { data: users } = data;
            const user = users[0];
            setUser(user);
        }).catch((err) => {
            if(axios.isCancel(err)) return;
            if(err?.response?.status === 401) logout();
            throw err;
        });

        return () => {
            controller.abort();
        };
    }, [accessToken, user, getAuthorizedAPI, logout]);

    const AuthGuards = ({children}) => {
        if(!accessToken) {
            const LoginPage = () => (loginPage && loginPage()) || <div className="place-center">Provide loginPage in AuthProvider component</div>;
            return (
                <LoginPage />
            );
        };
        if(accessToken && !user) {
            return (
                <PlaceCenter>
                    Loading...
                </PlaceCenter>
            );
        }
        return (
            <>
                {children}
            </>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                loginByAccessToken,
                logout,
                authorizedAPI: getAuthorizedAPI(),
                user: user
            }}
        >
            <AuthGuards>
                {React.Children.map(children, (child) => (<>{child}</>))}
            </AuthGuards>
        </AuthContext.Provider>
    );
};

function useAuth() {
    return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };