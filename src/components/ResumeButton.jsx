import React from 'react';

function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="btn btn-outline btn-primary mt-4"
    >
      Download Resume
    </a>
  );
}

export default ResumeButton;
