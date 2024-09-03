import React from "react";

function WorkshopDetails({ imageUrl, name, category, description, startDate, endDate, time, location }) {
  return (
    <div className="workshop-container">
      <img
        src={imageUrl || "default-image.jpg"}
        alt={`${name} logo`}
        className="workshop-image"
      />
      <h2>{name}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <p><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</p>
      <p><strong>Time:</strong> {time}</p>
      {location && (
        <div className="location">
          <p><strong>Location:</strong></p>
          <p>{location.city}, {location.state}</p>
        </div>
      )}
    </div>
  );
}

export default WorkshopDetails;
