import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [topCompanies, setTopCompanies] = useState('10');

  const handleChange = e => {
    setTopCompanies(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${topCompanies}&page=1&sparkline=true`
      )
      .then(res => {
        setCoinData(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }, [topCompanies]);
  return (
    <div className="App">
      {console.log(topCompanies)}
      <form onSubmit={handleSubmit}>
        <label className='top-companies'>Top Companies:</label>
        <select name='crypto' onChange={handleChange}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select>
      </form>
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
