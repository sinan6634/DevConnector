import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
