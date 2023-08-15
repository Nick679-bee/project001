import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    axios.get(`/api/rooms/${id}`) // Replace with your actual API endpoint
      .then(response => {
        setRoom(response.data);
      })
      .catch(error => {
        console.error('Error fetching room details:', error);
      });
  }, [id]);

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="room-details">
      <h2>{room.name}</h2>
      <img src={room.image} alt={room.name} />
      <p>{room.description}</p>
      <ul>
        {room.amenities.map(amenity => (
          <li key={amenity}>{amenity}</li>
        ))}
      </ul>
      <p>Price: ${room.price} per night</p>
      <button>Book Now</button>
    </div>
  );
};

export default RoomDetails;
