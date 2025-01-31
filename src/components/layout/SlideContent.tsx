import React from 'react';

const SlideContent = ({ children, media }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

export default SlideContent;