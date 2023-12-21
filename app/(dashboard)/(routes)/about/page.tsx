import React from 'react';
import ContactLink from './ContactButton';
import { Logo } from '../../_components/logo';

// New TeamMemberCard component
const TeamMemberCard: React.FC<{ member: any }> = ({ member }) => (
  <div className="bg-white shadow-md rounded p-6">
    <div className="text-center">
      {member.photo === Logo ? <Logo /> : null}
      <h2 className="text-xl">{member.name}</h2>
      <p className="text-gray-600">{member.role}</p>
      <p>{member.description}</p>
      <p>{member.email}</p>
      <ContactLink email={member.email} />
    </div>
  </div>
);

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'omarkhaled8991@gmail.com',
    photo: Logo,
  },
  {
    name: 'John Smith',
    role: 'CTO',
    description: 'Another team member description lorem ipsum ipsum lorem.',
    email: 'sangvurn@gmail.com',
  },
  {
    name: 'Another Team Member',
    role: 'Position',
    description: 'Description of the team member.',
    email: 'another@example.com',
  },
  // Add more team members as needed
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-100 text-center">
      <div className="w-full p-4 shadow-md bg-white mb-8">
        <h1 className="text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          At DataverseChallenge, we empower young minds through a dynamic and user-friendly learning environment tailored for students. Our mission: make Computer Science education accessible to all, fostering inclusivity, practical knowledge, and a sense of community among young innovators.
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="flex mt-8">
        <div className="w-1/2 p-4 shadow-md bg-white">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            To cultivate a generation of young minds passionate about Computer Science and equipped with foundational knowledge, empowering them to navigate the digital era with confidence and creativity.
          </p>
        </div>
        <div className="w-1/2 p-4 shadow-md bg-white">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            We provide a user-friendly platform for young students to easily learn the basics of Computer Science through interactive, engaging content. Our mission is to make CS education accessible to all, connecting theoretical concepts to real-world applications, and creating a vibrant community of young innovators.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-center mt-8 text-4xl font-bold">Our Team</h2>
      <div className="flex flex-wrap justify-center mt-4 p-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-md">
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
 