// TourCard.tsx
import React, { useState } from 'react';
import { Tour } from '../App';

// Extend the Tour interface to include the onRemove callback.
interface TourCardProps extends Tour {
  onRemove: (id: string) => void;
}

const TourCard: React.FC<TourCardProps> = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-content">
        <div className="tour-header">
          <h3>{name}</h3>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p className="tour-info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)} className="read-more">
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button onClick={() => onRemove(id)} className="not-interested">
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;
