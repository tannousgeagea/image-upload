import React from "react";
import UploadIcon from '../../assets/icons/upload.png'
import './button.css'

const Button = ({ onClick , text}) => {
    return (
        <div className="button-container">
            <button className="button-section" onClick={onClick}>
                <img src={UploadIcon} alt='button' className="logo-icon"/>
                <span>{text}</span>
            </button>
        </div>
    )
}

export default Button