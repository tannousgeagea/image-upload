import { useRef } from "react";
import Button from "../ui/button";


const UploadButton = ({ text, handleFileChange }) => {

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
      };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <Button 
                text={text}
                onClick={handleButtonClick}
            />

        </div>
    )
}

export default UploadButton