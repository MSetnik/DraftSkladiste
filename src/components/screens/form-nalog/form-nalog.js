import React, { useState, useEffect } from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import NavigationBar from "../../molecules/navbar/navbar";

//Style
import "./form-nalog.css";

// firebase
import firebase from "../../../firebase";

export default function FormNalog() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [user, setUser] = useState("Robert");
  const [description, setDescription] = useState("");

  const [data, setData] = useState([]);

  const handleResponse = async () => {
    const eventref = firebase.database().ref("proizvod");
    const snapshot = await eventref.once("value");
    const value = snapshot.val();

    setData(value);
    console.log(value);
  };

  useEffect(() => {
    handleResponse();
  }, []);

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return date + "." + month + "." + year;
  };

  function addNalog() {
    let newNalog = {
      name: product,
      price: price,
      quantity: quantity,
      user: user,
      description: description,
    };

    console.log(newNalog);
  }

  return (
    <div>
      <NavigationBar />
      <div className="form-container">
        <Form>
          <Form.Group controlId="formProduct">
            <Form.Label>Proizvod</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setProduct(e.target.value)}
            >
              {data.map((p) => (
                <option key={p.id}>{p.naziv}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Cijena/Kom</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              required
              placeholder="Cijena"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formQuantity">
            <Form.Label>Količina</Form.Label>
            <Form.Control
              type="number"
              required
              placeholder="Količina"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Datum</Form.Label>
            <Form.Control
              type="text"
              placeholder="20.01."
              disabled
              required
              value={getCurrentDate()}
            />
          </Form.Group>

          <Form.Group controlId="formUser">
            <Form.Label>Korisnik</Form.Label>
            <Form.Control type="text" value={user} disabled />
          </Form.Group>
          <Form.Group controlId="formUser">
            <Form.Label>Opis</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Opis"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => addNalog()}>
            Spremi
          </Button>
        </Form>
      </div>
    </div>
  );
}
