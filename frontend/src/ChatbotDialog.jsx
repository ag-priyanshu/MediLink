// ChatbotDialog.jsx

import React from 'react';
import PropTypes from 'prop-types';

const ChatbotDialog = ({ onClose }) => {
  return (
    <div className="chatbot-dialog" style={{ position: 'fixed', bottom: '80px', right: '80px', zIndex: '1100' }}>
      {/* Your dialog content here */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3>Chatbot</h3>
        <p>Chatbot content goes here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

ChatbotDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChatbotDialog;
