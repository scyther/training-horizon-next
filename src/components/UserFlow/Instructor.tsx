"use client"; // Ensures the component is client-side rendered

import React from 'react';

// Dummy data for instructors
const instructors = [
  {
    id: 1,
    name: 'Kirill Menko',
    title: 'Java Developer',
    description: `
      As children, we absorb information and learn from experiences that mold us into who we are. Many individuals impact a child's life, but the most powerful and influential role lies in a devoted teacher; a teacher provides growth to students as a gardener would to a garden of flowers.

      Each child can bloom into a thriving flower so long as you water their garden with optimism, love, patience, and guidance. Throughout my educational experiences, I was lucky enough to have educators who poured their knowledge and optimism into me, and now I would like to reciprocate that back to students who are in the position I was once in.

      Balancing life and school is hard enough for a student, but a powerful and caring teacher can steer you in the right direction. In this autobiography, you will read about my educational background, experiences that influenced my decision to become a teacher, and what I believe the role of a teacher should be in a student's life.

      As a student, I went to multiple schools, I went to three different elementary schools, two middle schools, and two high schools in Brownsville, and through it all, I had great experiences.
    `,
    stats: {
      students: '2,345 Students',
      reviews: '2,345 Reviews',
      courses: '23 Courses',
      rating: '4.4 Instructor Ratings',
    },
    imagePath: '/img/instructor.png', // Leave blank for now
  },
  //add more instructors
];

const InstructorCard: React.FC<{
  name: string;
  title: string;
  description: string;
  stats: { students: string; reviews: string; courses: string; rating: string };
  imagePath: string;
}> = ({ name, title, description, stats, imagePath }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6 mb-6">
      {/* Profile Picture */}
      <div className="flex-shrink-0 md:w-1/4 flex justify-center md:justify-center mb-4 md:mb-0">
        <img
          className="h-24 w-24 md:h-36 md:w-36 rounded-full object-cover"
          src={imagePath || '/path/to/default/image.jpg'} // Placeholder for now
          alt={name}
        />
      </div>

      {/* Instructor Details */}
      <div className="md:ml-6 md:w-3/4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <div className="mr-6">
            <i className="fas fa-user-graduate"></i> {stats.students}
          </div>
          <div className="mr-6">
            <i className="fas fa-comments"></i> {stats.reviews}
          </div>
          <div className="mr-6">
            <i className="fas fa-book"></i> {stats.courses}
          </div>
          <div>
            <i className="fas fa-star"></i> {stats.rating}
          </div>
        </div>
        <p className="text-gray-700 mt-4">{description}</p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 text-end w-full focus:outline-none font-medium">
          Show Full Description
        </button>
      </div>
    </div>
  );
};

const InstructorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Instructors</h1>
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            name={instructor.name}
            title={instructor.title}
            description={instructor.description}
            stats={instructor.stats}
            imagePath={instructor.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
