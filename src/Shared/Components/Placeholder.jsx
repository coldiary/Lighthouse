import React from 'react'

export const Placeholder = ({ iconName, title, description, ...otherProps }) => 
    <div className="pt-non-ideal-state" {...otherProps} >
        <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
            <span className={`pt-icon pt-icon-${iconName}`}></span>
        </div>
        <h4 className="pt-non-ideal-state-title">{title}</h4>
        <div className="pt-non-ideal-state-description">
            {description}
        </div>
    </div>