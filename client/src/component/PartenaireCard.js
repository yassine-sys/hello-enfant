import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
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
        <CardText>{partenaire.responsable_name} </CardText>
        
        
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          
        </div>
      </Card>
    </div>
  );
};

export default PartenaireCard;