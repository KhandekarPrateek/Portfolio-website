import { Col, Row } from "reactstrap";
import "./App.css";
import Home from "./pages/Home";
import SideBar from "./pages/SideBar";

const App = () => {
  return (
    <div>
      <Row>
        <Col sm={3}>
          <SideBar />
        </Col>
        <Col>
          <Home />
        </Col>
      </Row>
    </div>
  );
};

export default App;
