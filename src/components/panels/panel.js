const Panel = ({ title, subtitle, children }) => {
    return (
        <div className="panel">
            <div>
                {title &&
                    <div className="panel__title">
                        {title}        
                    </div>
                }
                {subtitle &&
                    <div className="panel__subtitle">
                        {subtitle}
                    </div>
                }
            </div>
            {children}
        </div>
    )
}

export default Panel;