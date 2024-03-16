import React from "react";
import { Col, Row } from "reactstrap";
import NamePage from "./NamePage";

const Home = () => {
  return (
    <div className="home-page-container">
      <Row className="h-100">
        <NamePage />
      </Row>
    </div>
  );
};

export default Home;
