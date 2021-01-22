import React from "react";

interface IProps {
    disabled?: boolean;
    onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
    disabled = false,
    onClick,
}) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            Test button
        </button>
    );
};
