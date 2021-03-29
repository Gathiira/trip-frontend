import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { ApiCall } from './ApiCall';
import './HomePage.css';

function HomePage() {
  const [data, setData] = useState([])
  const [trip, setTrip] = useState([])

  useEffect(() => {
    const getData = async() =>{
      await ApiCall("trip?filter=ongoing", '')
        .then(result => {
          setData(result.data['results']);
      })
      .catch((err) => {
          console.log(err);
      })
    }

    getData();
  }, [])

  const tripDetailView = (trip_id) => {
    ApiCall(`trip/detail-view?request_id=${trip_id}`,'')
    .then(result =>{
      console.log(result.data)

    })
    .catch((err) => {
        console.log(err);
    })
  }

  return (
      <div className='main_container col-md-10'>
        <div className="trip__container">
          <div className="trip__title">
            <h3>List of ongoing processes</h3>
          </div>
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Reference Number</td>
                <td>Expense</td>
                <td>Profit Margin</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody className="trip__list">
              {
                data.map((trip) => (
                  <tr key = {trip.id}>
                    <td value={trip.title}>{trip.title}</td>
                    <td value={trip.reference_number}>{trip.reference_number}</td>
                    <td value={trip.total_expense}>{trip.total_expense? <p>N/A</p>:null }</td>
                    <td value={trip.profit_margin}>{trip.profit_margin? <p>N/A</p>:null }</td>
                    <td value={trip.status}>{trip.status}</td>
                    <td>
                      <button value={trip.id} className="btn btn-link">
                        <Link className='nav-link' onClick={tripDetailView(trip.id)} to="/trip-details">View</Link>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
  );

};

export default HomePage;
