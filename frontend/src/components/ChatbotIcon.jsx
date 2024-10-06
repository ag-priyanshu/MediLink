// ChatbotIcon.jsx

import React, { useState } from 'react';
import ChatbotDialog from './ChatbotDialog'; // Import ChatbotDialog component

const ChatbotIcon = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div
        className="floating-chatbot-icon"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
          cursor: 'pointer',
        }}
        onClick={handleOpenDialog}
      >
        <img src="/path/to/chatbot-icon.png" alt="Chatbot Icon" style={{ width: '50px', height: '50px' }} />
      </div>
      {openDialog && <ChatbotDialog onClose={handleCloseDialog} />}
    </>
  );
};

export default ChatbotIcon;
