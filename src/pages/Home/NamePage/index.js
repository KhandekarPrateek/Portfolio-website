import React from "react";
import { Col, Row } from "reactstrap";
import pic from "../../../assets/pic.jpeg";
const NamePage = () => {
  return (
    <div className="name-page h-100 justify-content-center d-flex align-items-center ">
      <Row>
        <Col sm={3} className="justify-content-start d-flex align-items-center">
          <img src={pic} alt="profile-pic" />
        </Col>
        <Col sm={5}>
          <h1 className="display-2 my-name text-wrap ">PRATEEK</h1>
          <h1 className="display-2 my-surname">KHANDEKAR</h1>
        </Col>
      </Row>
    </div>
  );
};

export default NamePage;
