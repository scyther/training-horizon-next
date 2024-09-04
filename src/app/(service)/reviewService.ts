
interface Review {
    name: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }
export const fetchReviews = async (): Promise<Review[]> => {
  const res = await fetch('http://localhost:3001/reviews');
  return res.json();
};

export const submitReview = async (review: Review): Promise<void> => {
  await fetch('http://localhost:3001/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });
};
