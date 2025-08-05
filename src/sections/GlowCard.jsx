import React, { useRef } from 'react';

const GlowCard = ({ card, children, index }) => {

  const cardrefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardrefs.current[index];
    if(!card) return;

    const rect = card.getBoundingClientRect();
    const mousex = e.clientX - rect.left - rect.width / 2;
    const mousey = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mousex, mousey) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle+60)
  }
  return (
    <div  ref={(el) => (cardrefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10">
      <div className="glow" />
      
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            src="assets/public/images/star.png" // ✅ Correct path
            key={i}
            alt="star"
            className="size-5"
          />
        ))}
      </div>

      {/* Review */}
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {/* Custom children content (image, etc.) */}
      {children}
    </div>
  );
};

export default GlowCard;