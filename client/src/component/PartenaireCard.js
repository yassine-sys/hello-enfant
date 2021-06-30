import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import { useDispatch } from "react-redux";

const PartenaireCard = ({ partenaire }) => {
  const dispatch = useDispatch();
  
  return (
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5"> {partenaire.partenaire_name} </CardTitle>
        <CardText>{partenaire.categorie} </CardText>
        <img src='sport.jpg' />
        
        
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          
        </div>
      </Card>
      {/* <Card>
    
    <Card.Body>
      <Card.Title> {partenaire.partenaire_name}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    
  </Card> */}
    </div>
  );
};

export default PartenaireCard;