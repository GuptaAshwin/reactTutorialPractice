import React from "react";

function WorkshopDetails({ workshop }) {
  return (
    <div className="workshop-container">
      <img src={workshop.imageUrl} alt={`${workshop.name} logo`} className="workshop-image" />
      <h2>{workshop.name}</h2>
      <p><strong>Category:</strong> {workshop.category}</p>
      <p dangerouslySetInnerHTML={{ __html: workshop.description }}></p>
      <p><strong>Start Date:</strong> {new Date(workshop.startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(workshop.endDate).toLocaleDateString()}</p>
      <p><strong>Time:</strong> {workshop.time}</p>
      <div className="location">
        <p><strong>Location:</strong></p>
        <p>{workshop.location.address}</p>
        <p>{workshop.location.city}, {workshop.location.state}</p>
      </div>
    </div>
  );
}

export default WorkshopDetails;