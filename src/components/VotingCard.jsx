import React from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  let { team, incrementVoteCount } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/images/${team.logo}`} />
      <Card.Body>
        <Card.Title>{team.name}</Card.Title>
        <Button variant="success" onClick={() => incrementVoteCount(team._id)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {team.votes}</Card.Footer>
    </Card>
  );
}
export default VotingCard;
