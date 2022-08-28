import default_user from "./default_user.png";

const UserBanner = ({ avatarUrl, displayName }) => {
    return (
        <div className="user_banner">
            <img src={avatarUrl || default_user} alt="avatar"/>
            <span>{displayName || "N/A"}</span>
        </div>
    )
}

export default UserBanner;