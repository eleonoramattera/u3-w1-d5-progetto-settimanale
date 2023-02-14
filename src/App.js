import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />
      <Container className="w-100 m-auto">
        <Main />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
