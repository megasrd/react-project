import React from 'react';
import './Toggle.scss';

const Toggle = (props) => {
    return  (
        <label for={props.name} className="card toggle-wrapper col-span-6"> 
            <div className="label-wrapper">
                <div className="material-icons icon">
                    { props.icon }
                </div>
                <h3 className="title"> { props.title } </h3>
            </div>
            <input name={props.name} id={props.name} type="checkbox" />
            <div class="toggle" />
        </label>
    )
}

Toggle.defaultProps = {
    name: "toggle-1",
    title: "Toggle Button",
    icon: "mood"
}

export default Toggle;
