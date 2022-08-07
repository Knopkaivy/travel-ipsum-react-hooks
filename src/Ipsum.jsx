import React from 'react';
import './styles/Ipsum.css';

const Ipsum = ({ ipsum }) => {
  return (
    <div className="Ipsum__container">
      <div className="Ipsum">
        {ipsum.map((par, index) => (
          <p key={index}>{par}</p>
        ))}
      </div>
    </div>
  );
};

export default Ipsum;
