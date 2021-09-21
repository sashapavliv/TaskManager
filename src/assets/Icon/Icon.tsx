import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";

const Icon: React.FC<{
    color?: string;
    size: string | number;
    icon: string;
    className: any;
    onClick?: Function;
    style?: any;
}> = (props) => {
    const { color, size = "100%", icon, style = "" } = props;
    return (
        <IcomoonReact
            className={props.className}
            onClick={props.onClick}
            style={style}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon} />
    );
};

export default Icon;