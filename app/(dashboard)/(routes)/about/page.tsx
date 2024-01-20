"use client"
import React, { useEffect } from 'react';
import { Logo } from '../../_components/logo';
import Image from 'next/image';
import 'intro.js/introjs.css';
import introJs from 'intro.js';
const videoSource = '/path/to/binary1.mp4';

interface TeamMember {
  name: string;
  role: string;
  description?: string;
  email?: string;
  photo?: any;
}

const MemberContainer: React.FC<{ members: TeamMember[] }> = ({ members }) => (
  <div className="flex flex-wrap justify-center mt-4 p-8">
    {members.map((member, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-md">
        <TeamMemberCard member={member} />
      </div>
    ))}
  </div>
);

const ContactButtonComponent: React.FC<{ email: string }> = ({ email }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => window.location.href = `mailto:${email}`}
  >
    Contact
  </button>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white shadow-md rounded p-6">
    <div className="text-center">
      {member.photo === Logo ? (
        <Logo />
      ) : (
        <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      )}
      <h2 className="text-xl">{member.name}</h2>
      <p className="text-gray-600">{member.role}</p>
      {member.description && <p>{member.description}</p>}
      {member.email && (
        <p>
          <ContactButtonComponent email={member.email} />
        </p>
      )}
    </div>
  </div>
);

const ColorfulDivider: React.FC<{ color: string }> = ({ color }) => (
  <div className={`bg-${color}-500 h-2 w-16 mx-auto my-4 rounded-full`} />
);


const AboutUsPage: React.FC = () => {
  const groupMembers: TeamMember[] = [
    {
      name: 'Mohamed Khaled',
      role: 'Group Member',
      photo: '/me.jpeg',
      email: 'frhatmedo43@gmail.com',
    },
    {
      name: 'Shady Bahaa',
      role: 'Group Member',
      photo: '/shady12.jpeg',
      email: 'Shadyb638@gmail.com',
    },
    {
      name: 'Mohamed Osama',
      role: 'Group Member',
      photo: '/mohamed.jpeg',
      email: 'Mohammed.osama.elsheikh@gmail.com',
    },
    {
      name: 'Ahmed Ebeidy',
      role: 'Group Member',
      photo: '/obaidy.jpeg', 
      email: 'Ahmedhusseinebedy@gmail.com',
    },
    {
      name: 'Ahmed Mahmoud',
      role: 'Group Member',
      photo: '/ahmed.jpeg', 
      email: 'ahmedmahmoud0929@gmail.com',
    },
    {
      name: 'Sherouk Mansour',
      role: 'Group Member',
      photo: '/sherouk.jpeg', 
      email: 'Sheroukmansour28@gmail.com',
    },
  ];

  

  return (
    <div className="font-sans bg-gray-100 text-center">
      {/* Vision Section */}
      <div className="py-12">
        <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg leading-relaxed">
        At Dataverse, we envision a world where online education 
        becomes a dynamic and accessible force, transcending boundaries to provide learners of all ages and backgrounds 
        with an engaging and transformative learning 
        experience. Our vision is to be a global leader in the realm of web-based education, pioneering innovative approaches that empower
         individuals to thrive in the digital era  </p>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-gray-200">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed">
        At Dataverse, our mission is to revolutionize online learning through a comprehensive and user-friendly web-based platform.
         We are committed to fostering a passion for computer science,
          equipping learners with essential skills for competitive programming,
           and delving into web development, software engineering, and information systems. 
           Beyond coding, we aim to guide our users in transforming knowledge into market-ready products.
            With a focus on the synergy between technology and business, 
            we strive to make digital transformation accessible and exciting.
             Join us on a dynamic and rewarding educational adventure, 
             where our web-based platform 
             opens doors to endless possibilities for learners worldwide.</p>
      </div>

      {/* Colorful Divider Above Team Section */}
      <ColorfulDivider color="green" />


            {/* Video Section */}
            <div className="py-12">
        <h2 className="text-4xl font-bold mb-6">Unveiling Dataverse Challenge: Our Passion, Your Learning</h2>
        <div className="flex justify-center">
          
        {/* aspect ration : 16/9
              16/9 * 1024 = 576
        */}
        <video controls width="1024" height="576">

          <source src="/dataverse2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-center mt-8 text-4xl font-bold">Our Team</h2>
      <MemberContainer members={groupMembers} />

    </div>
  );
};

export default AboutUsPage;