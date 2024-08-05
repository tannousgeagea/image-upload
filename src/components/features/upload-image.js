import React from "react";
import { useState } from 'react';
import './upload-image.css';
import Button from "../ui/button";
import UploadButton from "../common/upload-button";
import usePreviewImage from "../../hooks/preview-image";
import BinIcon from '../../assets/icons/bin.png'
import handleUpload from "../api/upload";

const ImageUploadFeature = () => {

    const { selectedFile: file, imagePreview: image, handleFileChange: handleFileChange, handleDelete: handleDelete } = usePreviewImage()
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);


    const handleDeleteClick = () => {
        setOverlayVisible(false)
        handleDelete()
    }
    const handleUploadClick = () => {
        setOverlayVisible(true);
        handleUpload({
          file: file,
          setUploading,
          setUploadPercentage,
          setUploadComplete
        });
      };

    return (
        <div className="image-upload-container">
            <div className="image-upload-content">

            {image ? (
                <div className="image-upload-content after">

                    <div className="image-upload-content button">

                        <div className="submit-image" onClick={handleUploadClick}>
                            <p>Submit Image</p>
                        </div>

                        <UploadButton 
                            handleFileChange={handleFileChange}
                            text={'select File'}
                        />
                    </div>

                    <div className="image-preview">
                        <div className="delete-icon" onClick={handleDeleteClick}>
                            <img src={BinIcon} alt="bin" />
                        </div>
                        <img src={image} alt="Preview" />
                        <p>{file.name}</p>
                        {overlayVisible && (
                            <div className={`progress-overlay ${uploadComplete ? 'checkmark-overlay' : ''}`}>
                                {uploadComplete ? (
                                    <div className="checkmark">✔</div>
                                ) : (
                                    <div className="progress-bar">
                                        <progress value={uploadPercentage} max="100">{uploadPercentage}%</progress>
                                        <span>{uploadPercentage}%</span>
                                    </div>
                                )}
                            </div>
                        )}

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