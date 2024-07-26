import React, { useEffect, useRef } from 'react';
import './index.css';
import LoginForm from './Components/Loginform/LoginForm';
import horsie from './Components/Assets/horsie.mov';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.playbackRate = 0.5; 

      videoElement.addEventListener('ended', () => {
        videoElement.classList.add('fade-out');
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', () => {
          videoElement.classList.add('fade-out');
        });
      }
    };
  }, []);

  return (
    <div className="login-page">
      <video ref={videoRef} autoPlay muted loop id="background-video">
        <source src={horsie} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <LoginForm />
    </div>
  );
}

export default App;
