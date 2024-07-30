import React from 'react';
import './StreakCounter.css';

const StreakCounter = ({ contributions }) => {
  const getColor = (count) => {
    if (count >= 4) return '#216e39';
    if (count >= 3) return '#30a14e';
    if (count >= 2) return '#40c463';
    if (count >= 1) return '#9be9a8';
    return '#ebedf0';
  };

  return (
    <div className="contribution-graph">
      {contributions.map((week, i) => (
        <div key={i} className="week">
          {week.map((day, j) => (
            <div
              key={j}
              className="day"
              style={{ backgroundColor: getColor(day) }}
              title={`Contributions: ${day}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StreakCounter;
