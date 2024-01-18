import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState([]);
  const API = "tableData.json";
  const fetchData = async (url) => {
    const res = await fetch(url);
    const fetcheddata = await res.json();
    setUser(fetcheddata);
    console.log(fetcheddata);
  };

  useEffect(() => {
    //sideeffects
    fetchData(API);
  }, []);

  return (
    <div className="App">
      <table className="table">
        <thead className="heading-title">
          <tr>
            <th>INSTRUMENT</th>
            <th>SYMBOL</th>
            <th>EXPIRY_DT</th>
            <th>STRIKE_PR</th>
            <th>OPTION_TYP</th>
            <th>OPEN</th>
            <th>HIGH</th>
            <th>LOW</th>
            <th>CLOSE</th>
            <th>SETTLE_PR</th>
            <th>CONTRACTS</th>
            {/*<th>VAL_INLAKH</th>
            <th>OPEN_INT</th>
            <th>CHG_IN_OI</th>
            <th>TIMESTAMP</th> */}
          </tr>
        </thead>
        <tbody>
          {user.slice(0, 10).map((item) => {
            const {
              INSTRUMENT,
              SYMBOL,
              EXPIRY_DT,
              STRIKE_PR,
              OPTION_TYP,
              OPEN,
              HIGH,
              LOW,
              CLOSE,
              SETTLE_PR,
              CONTRACTS,
              // VAL_INLAKH,
              // OPEN_INT,
              // CHG_IN_OI,
              // TIMESTAMP,
            } = item;
            return (
              <tr>
                <td>{INSTRUMENT}</td>
                <td>{SYMBOL}</td>
                <td>{EXPIRY_DT}</td>
                <td>{STRIKE_PR}</td>
                <td>{OPTION_TYP}</td>
                <td>{OPEN}</td>
                <td>{HIGH}</td>
                <td>{LOW}</td>
                <td>{CLOSE}</td>
                <td>{SETTLE_PR}</td>
                <td>{CONTRACTS}</td>
                {/* <td>{VAL_INLAKH}</td>
                <td>{OPEN_INT}</td>
                <td>{CHG_IN_OI}</td>
                <td>{TIMESTAMP}</td>  */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
