import React from "react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Custom Image Display */}
        <div className="flex justify-center mb-6">
          <img
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="No chat selected"
            className="w-24 h-24 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold text-primary">Welcome to WeChat!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>

        {/* Additional Styling for Aesthetic */}
        <div className="mt-6">
          <button className="px-6 py-2 text-white bg-primary rounded-lg shadow hover:bg-primary/80">
            Start a New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
