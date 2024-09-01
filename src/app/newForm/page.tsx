"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Trainer {
  id: string;
  name: string;
  qualifications: string;
  linkedin: string;
  experience: string;
  email: string;
  phone: string;
  address: string;
  availability: string[];
}

const TrainerList: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/v1/trainers/');
        setTrainers(response.data);
      } catch (err) {
        setError('Failed to fetch trainers.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trainers</h1>
      <ul className="space-y-4">
        {trainers.map(trainer => (
          <li key={trainer.id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{trainer.name}</h2>
            <p><strong>Qualifications:</strong> {trainer.qualifications}</p>
            <p><strong>LinkedIn:</strong> <a href={trainer.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">{trainer.linkedin}</a></p>
            <p><strong>Experience:</strong> {trainer.experience}</p>
            <p><strong>Email:</strong> {trainer.email}</p>
            <p><strong>Phone:</strong> {trainer.phone}</p>
            <p><strong>Address:</strong> {trainer.address}</p>
            <p><strong>Availability:</strong> {trainer.availability.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerList;
