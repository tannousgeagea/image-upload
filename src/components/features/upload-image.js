import React from "react";
import { useState } from 'react';
import './upload-image.css';
import Button from "../ui/button";
import UploadButton from "../common/upload-button";
import usePreviewImage from "../../hooks/preview-image";

const ImageUploadFeature = () => {

    const { selectedFile: file, imagePreview: image, handleFileChange: handleFileChange } = usePreviewImage()
  
    return (
        <div className="image-upload-container">
            <div className="image-uplaod-content">

            {image ? (
                <div className="image-upload-content after">
                    <div className="image-upload-content button">
                        <UploadButton 
                            handleFileChange={handleFileChange}
                        />
                    </div>

                    <div className="image-preview">
                        <img src={image} alt="Preview" />
                        <p>{file.name}</p>
                    </div>
                </div>
            ): 
                <div className="image-upload-content button">
                    <UploadButton 
                        handleFileChange={handleFileChange}
                    />
                </div>
        }
            </div>
        </div>
    )
}


export default ImageUploadFeature