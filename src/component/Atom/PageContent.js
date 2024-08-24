import React from 'react';

const PageContent = ({ children }) => {
  return (
    <div style={{ padding: 20 }}>
      <div className="left-align">
        <h1 style={{ display: 'inline-block' }}>Home</h1>
      </div>
      {children}
    </div>
  );
};

export default PageContent;