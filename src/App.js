import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RoomList from './components/HouseList';
import RoomDetails from './components/HouseDetails';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import '/home/nick/Desktop/Project-001/hotel-booking-website/src/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={RoomList} />
          <Route path="/room/:id" component={RoomDetails} />
          <Route path="/booking/:id" component={BookingForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
