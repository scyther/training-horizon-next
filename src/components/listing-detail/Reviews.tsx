"use client"

import { useEffect, useState } from 'react';

interface Review {
  _id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('http://localhost:3005/api/v1/review/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="min-h-screen p-10">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review._id} className="p-4 bg-white shadow rounded-lg">
            <div className="flex items-center mb-2">
              <img
                src={`https://ui-avatars.com/api/?name=${review.name}&background=random`}
                alt={review.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <div className="text-yellow-500">
                  {'★'.repeat(review.rating)}{' '}
                  <span className="text-gray-500">({review.rating} stars)</span>
                </div>
                <div className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</div>
              </div>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
