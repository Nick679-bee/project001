import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RoomList from './components/HouseList';
import RoomDetails from './components/HouseDetails';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import '/home/nick/Desktop/Project-001/hotel-booking-website/src/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={RoomList} />
          <Route path="/room/:id" component={RoomDetails} />
          <Route path="/booking/:id" component={BookingForm} />
          {/* Add more routes as needed */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;