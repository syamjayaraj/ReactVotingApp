import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import teamsJson from "./lib/teams.json";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamsJson);
  }, []);

  function incrementVoteCount(teamId) {
    teams = teams.map((team) => {
      if (team._id === teamId) {
        team.votes = team.votes + 1;
      }
      return team;
    });
    setTeams(teams);
  }

  return (
    <Container className="app">
      <Row>
        {teams.map((team) => {
          return (
            <Col md={4}>
              <VotingCard
                team={team}
                incrementVoteCount={(teamId) => incrementVoteCount(teamId)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default App;
