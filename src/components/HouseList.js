import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('/api/rooms') // Replace with your actual API endpoint
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error('Error fetching room data:', error);
      });
  }, []);

  return (
    <div className="room-list">
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>
              {room.name} - ${room.price} per night
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
