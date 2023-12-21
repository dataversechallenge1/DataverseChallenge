// ContactLink.tsx
import React from 'react';

const ContactLink: React.FC<{ email: string }> = ({ email }) => {
  return (
    <a href={`mailto:${email}`} className="bg-black text-white py-2 px-4 mt-4 block w-full text-center">
      Contact
    </a>
  );
};

export default ContactLink;
