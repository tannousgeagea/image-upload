import React from "react";
import { useState } from 'react';
import './upload-image.css';
import Button from "../ui/button";
import UploadButton from "../common/upload-button";
import usePreviewImage from "../../hooks/preview-image";
import BinIcon from '../../assets/icons/bin.png'

const ImageUploadFeature = () => {

    const { selectedFile: file, imagePreview: image, handleFileChange: handleFileChange, handleDelete: handleDelete } = usePreviewImage()

    return (
        <div className="image-upload-container">
            <div className="image-upload-content">

            {image ? (
                <div className="image-upload-content after">
                    <div className="image-upload-content button">
                        <UploadButton 
                            handleFileChange={handleFileChange}
                            text={'select File'}
                        />
                    </div>

                    <div className="image-preview">
                        <div className="delete-icon" onClick={handleDelete}>
                            <img src={BinIcon} alt="bin" />
                        </div>
                        <img src={image} alt="Preview" />
                        <p>{file.name}</p>
                    </div>
                </div>
            ): 
                <div className="image-upload-content button">
                    <UploadButton 
                        handleFileChange={handleFileChange}
                        text='upload'
                    />
                </div>
        }
            </div>
        </div>
    )
}


export default ImageUploadFeature