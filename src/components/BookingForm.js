import React, { useState } from 'react';

const BookingForm = ({ room }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleBooking = () => {
    const bookingData = {
      roomId: room.id,
      checkIn,
      checkOut,
      guests
    };
    // Send bookingData to backend API for processing
  };

  return (
    <div className="booking-form">
      <h2>Book {room.name}</h2>
      <label>
        Check-in Date:
        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
      </label>
      <label>
        Check-out Date:
        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
      </label>
      <label>
        Guests:
        <input type="number" value={guests} onChange={e => setGuests(e.target.value)} />
      </label>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookingForm;
