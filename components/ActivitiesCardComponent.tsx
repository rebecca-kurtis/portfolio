import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


interface ActivitiesCardComponentProps {
  cardTitle: string;
  cardText: string;
  buttonText: string;
  buttonLink: string;
}

export const ActivitiesCardComponent: React.FC<ActivitiesCardComponentProps> = ({
  cardTitle,
  cardText,
  buttonText,
  buttonLink
}) => {
  return (
    <Card className="cardContainer">
      <Card.Body className="cardBodyContainer">
        <Card.Title className="cardTitle">{cardTitle}</Card.Title>
        <Card.Text className="cardText">{cardText}</Card.Text>
        <Button href={buttonLink}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};
