import React, { useState } from 'react';
import '../App.css';
import { FaMicrophone } from 'react-icons/fa';

const VoiceRecorderButton = () => {
    const [isRecording, setIsRecording] = useState(false);

    const handleButtonClick = () => {
        setIsRecording(!isRecording);
    };

    return (
        <div className="voice-recorder-container">
            <button
                className={`voice-recorder-button ${isRecording ? 'recording' : ''}`}
                onClick={handleButtonClick}
            >
                <FaMicrophone className="microphone-icon" />
            </button>
            {isRecording && <div className="recording-indicator"></div>}
        </div>
    );
};

export default VoiceRecorderButton;
