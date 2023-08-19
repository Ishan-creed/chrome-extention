import React, { useState } from "react";
import axios from "axios";

export const CountButton = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const showLocation = async () => {
    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.get("http://localhost:5000/getLocation");
      const gotData = response.data;
      setCity(gotData.city);
      setCountry(gotData.country);
      setState(gotData.region);
    } catch (error) {
      console.error("Error fetching location data:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <div>
  
      <div className="location">
        {city && (
          <>
            Your Country is: {country}
            <br />
            Your State is: {state}
            <br />
            Your City is: {city}
          </>
        )}
      </div>
      <div>
      <button
        onClick={() => showLocation()}
        type="button"
        className="button-dimension  plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
        plasmo-shadow-lg hover:plasmo-shadow-md
        active:plasmo-scale-105 plasmo-bg-slate-50 hover:plasmo-bg-slate-100 plasmo-text-slate-800 hover:plasmo-text-slate-900 plasmo-overlay"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : city ? "Show Location" : "Get Location"}
      </button>
      </div>
    </div>
  );
};
