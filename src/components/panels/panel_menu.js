const PanelMenu = ({ children, onSubmit }) => {
    return (
        <form className="panel__menu" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default PanelMenu;