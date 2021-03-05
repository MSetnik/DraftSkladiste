import React, { useState, useEffect } from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import NavigationBar from "../../molecules/navbar/navbar";

//Style
import "./form-proizvod.css";

// firebase
import firebase from "../../../firebase";

export default function FormProizvod() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [jmj, setJmj] = useState();
  const [user, setUser] = useState("Robert");
  const [description, setDescription] = useState("");

  const [data, setData] = useState([]);
  const [id, setId] = useState(Date.now());

  const handleResponse = async () => {
    const eventref = firebase.database().ref("proizvodi");
    const snapshot = await eventref.once("value");
    const value = snapshot.val();

    setData(value);
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
  const [date] = useState(getCurrentDate());

  function addProduct() {
    let newProduct = {
      id: id,
      name: product,
      price: price,
      quantity: quantity,
      jmj: jmj,
      user: user,
      description: description,
    };

    let x;

    if (typeof data == "object") {
      // x = new Array();
      // x.push(data);
      console.log("da");
    } else {
      // x = data;
      console.log("ne");
    }

    // let x = data;
    // x.push(newProduct);
    console.log(x);

    // firebase.database().ref("proizvodi").set(x);
  }

  return (
    <div>
      <NavigationBar />
      <div className="form-container">
        <Form>
          <Form.Group controlId="formProduct">
            <Form.Label>Proizvod</Form.Label>
            <Form.Control
              type="text"
              placeholder="Proizvod"
              value={product}
              required
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Cijena</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Cijena"
              value={price}
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formQuantity">
            <Form.Label>Količina</Form.Label>
            <Form.Control
              type="number"
              placeholder="Količina"
              value={quantity}
              required
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formJmj">
            <Form.Label>Količina</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jedinica mjere"
              value={jmj}
              required
              onChange={(e) => {
                setJmj(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Datum</Form.Label>
            <Form.Control
              type="text"
              placeholder="20.01."
              disabled
              value={date}
            />
          </Form.Group>

          <Form.Group controlId="formUser">
            <Form.Label>Korisnik</Form.Label>
            <Form.Control type="text" value={user} disabled />
          </Form.Group>

          <Button variant="primary" onClick={() => addProduct()}>
            Spremi
          </Button>
        </Form>
      </div>
    </div>
  );
}
