import React from "react";

function LocationSearchPanel({ setDestination, setPickup, suggestions, vehiclePanel, setVehiclePanel, activeFeild }) {

  const handleSuggestionClick = (suggestion) => {
    if (activeFeild === 'pickup') {
      setPickup(suggestion.description);  // ✅ Correctly setting the description
    } else if (activeFeild === 'destination') {
      setDestination(suggestion.description);  // ✅ Correct destination handler
    }
  };

  return (
    <div>
      {suggestions.length > 0 ? (
        suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => {
              handleSuggestionClick(elem);
              console.log(elem);  // Debugging suggestion
            }}
            className="flex border-2 p-3 border-gray-100 active:border-black rounded-xl gap-4 items-center my-2 justify-start cursor-pointer"
          >
            <h2 className="bg-[#eee] h-8 flex items-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem.description}</h4> {/* ✅ Display description */}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No suggestions found.</p>  // ✅ Handle empty state
      )}
    </div>
  );
}

export default LocationSearchPanel;
