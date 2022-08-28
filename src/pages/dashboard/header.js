import { useAuth } from "../../providers/auth.js";
import UserBanner from "../../components/user_banner/index.js";
import LogoutIcon from "../../components/icons/logout_icon.js";
import HomeIcon from "../../components/icons/home_icon.js";


const Header = ({user, setPanelToWelcome}) =>{
    const { logout } = useAuth();
    return (
        <div className="header">
            <UserBanner avatarUrl={user?.profile_image_url} displayName={user?.display_name} />
            <div className="header__menu">
                <button onClick={setPanelToWelcome} className="button button-icon"><HomeIcon /></button>
                <button onClick={logout} className="button button-icon"><LogoutIcon /></button>
            </div>
        </div>
    )
}

export default Header;