import React from 'react';

const App = () => {
  return (
    <main>
      <div className="card">
        <div className="image-box">
          <img
            src="/images/image-qr-code.png"
            alt="QR code frontend mentor"
            className="image"
          />
        </div>
        <div className="details">
          <h1 className="title">
            Improve your front-end skills by building projects
          </h1>
          <div className="description">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
