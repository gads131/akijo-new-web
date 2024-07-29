import React, { useState, useEffect } from "react";

const priceDate = () => {
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePriceUpdate = () => {
    setLastUpdated(new Date());
    // Logic for updating the price
  };

  return (
    <div className="pricing-section">
      <h2 className="mb-4 bg-white text-2xl font-bold">Pricing</h2>
      <div className="price">Price: $99</div>
      <div className="updated-date">
        {lastUpdated
          ? `Last updated: ${lastUpdated.toLocaleString()}`
          : `Current date: ${currentDate.toLocaleString()}`}
      </div>
      <button
        onClick={handlePriceUpdate}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Update Price
      </button>
    </div>
  );
};

export default priceDate;
