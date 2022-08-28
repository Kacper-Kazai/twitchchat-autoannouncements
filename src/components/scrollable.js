const Scrollable = ({ children }) => {
    return (
        <div className="scrollable_parent">
            <div className="scrollable_box">
                {children}
            </div>
        </div>
    )
}

export default Scrollable;