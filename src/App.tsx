// App.tsx
import React, { useState } from 'react';
import Gallery from './components/Gallery.tsx';
import './styles/styles.css';

// Define a type for a Tour
export interface Tour {
  id: string;
  name: string;
  info: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  // State for tours – starts as an empty array of Tour objects.
  const [tours, setTours] = useState<Tour[]>([]);

  // Remove a tour by filtering it out by id.
  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Render the Gallery component and pass state and handlers as props.
  return (
    <main>
      <Gallery tours={tours} setTours={setTours} removeTour={removeTour} />
    </main>
  );
};

export default App;
