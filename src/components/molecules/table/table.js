import React, { useState, useEffect } from "react";

//Bootstrap
import Table from "react-bootstrap/Table";

//Style
import "./table.css";

// firebase
import firebase from "../../../firebase";

export default function TableHome() {
  const [data, setData] = useState([]);

  const handleResponse = async () => {
    const eventref = firebase.database().ref("proizvodi");
    const snapshot = await eventref.once("value");
    const value = snapshot.val();

    // let x = [];
    // x.push(value);
    // console.log(x);
    // setData(x);

    console.log(value);
    setData(value);
  };

  useEffect(() => {
    handleResponse();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAZIV</th>
            <th>CIJENA</th>
            <th>JD. MJERE</th>
            <th>KOLIČINA</th>
          </tr>
        </thead>

        <tbody>
          {/* {data.map((p, index) => (
            <tr key={index}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.cijena.toFixed(2) + " kn"}</td>
              <td>{p.jmj}</td>
              <td>{p.kolicina}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
}
