// Gallery.tsx
import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';
import { Tour } from '../App';

// Define props interface for Gallery component.
interface GalleryProps {
  tours: Tour[];
  setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
  removeTour: (id: string) => void;
}

const url = 'https://course-api.com/react-tours-project';

const Gallery: React.FC<GalleryProps> = ({ tours, setTours, removeTour }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tours on component mount.
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const toursData: Tour[] = await response.json();
        setTours(toursData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tours. Please try again later.');
        setLoading(false);
      }
    };

    fetchTours();
  }, [setTours]);

  // Display loading or error messages if applicable.
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  // Render list of tours.
  return (
    <section>
      <h1>Tour Comparison App</h1>
      <div className="tour-list">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} onRemove={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
