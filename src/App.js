import logo from './logo.svg';
import './App.css';
import { upload } from '@testing-library/user-event/dist/upload';
import ImageUploadFeature from './components/features/upload-image';


function App() {


  return (
    <div className="App">
      <div className='App-header'>
        Upload and Share your Image
      </div>

      <div App-content>
        <ImageUploadFeature />
      </div>
    </div>
  );
}

export default App;
