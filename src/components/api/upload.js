import { baseUrl } from "./base";
import axios from 'axios';

const handleUpload = async ({ file, setUploading, setUploadPercentage, setUploadComplete }) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('files', file);

    setUploading(true);
    setUploadPercentage(0);

    try {
      const response = await axios.post(`${baseUrl}/api/v1/images/waste_collection`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          setUploadPercentage(percent);
        },
      });

      if (response.status === 200) {
        setUploadComplete(true);
        console.log('Upload successful!');
      } else {
        alert(`Upload Failed: ${response.json()}`);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed!');
    } finally {
      setUploading(false);
    }
  };


export default handleUpload