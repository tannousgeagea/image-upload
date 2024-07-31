import { useRef } from "react";
import Button from "../ui/button";


const UploadButton = ({ handleFileChange }) => {

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
                text='upload'
                onClick={handleButtonClick}
            />

        </div>
    )
}

export default UploadButton