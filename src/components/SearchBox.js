import React, { useState } from "react";
import {Form, Button, Row } from 'react-bootstrap'

const SearchBox = () => {

  const [resultsData, setResultsData] = useState("");
  const [zipCode, setZipCode] = useState("");

  //CSS
  const box = {
    border: "#d01443 solid 2px",
    width: "200px",
    margin: "0 auto",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "40%",
    left:"50%",
    padding: "40px",
    backgroundColor: "#fafbff",
    textAlign: "center"
  }
  const zipcode = {
    minHeight:"30px",
    width: "120px",
    borderRadius: "6px",
    border: "#d3d5e1 solid 2px"
  }
  const bttn ={
    backgroundColor: "#d01443",
    marginTop: "20px",
    width: "120px",
    minHeight: "36px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "0",
    borderRadius: "6px",
    boxShadow: "0 5px 4px #fde3e7",
  }
  const bttnd ={
    backgroundColor: "#f9b8c4",
    marginTop: "20px",
    width: "120px",
    minHeight: "36px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "0",
    borderRadius: "6px",
    boxShadow: "0 5px 4px #fde3e7",
  }
  const result = {
    fontSize: "14px",
    color: "#050f38"
  }

  const backend = "http://localhost:5002/lookup?zipcode="

  const submitHandler = (e) => {
    e.preventDefault()
    fetch(backend + zipCode, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => setResultsData(JSON.stringify(res.data)))
}
  return (
    <Form onSubmit={submitHandler} style={box}>
      <Form.Group>
        <Row>
          <Form.Control style={zipcode}
            placeholder='Enter zip code'
            value={zipCode}
            onChange={(e) => {
                setZipCode(e.target.value);
            }}
          ></Form.Control>
        </Row>
      </Form.Group>
      {zipCode==="" 
              ? <Button type='submit' style={bttnd} disabled>SEARCH</Button>
              : <Button type='submit' style={bttn}>SEARCH</Button>
       }
      <p style={result}>{((resultsData === "") || (zipCode === "" && resultsData !== ""))
                              ? ""
                              : resultsData === "\x22Yes\x22" 
                                ? "We are in your area" 
                                : "We are not in your area yet"}</p>
    </Form>  
  );
};
export default SearchBox;