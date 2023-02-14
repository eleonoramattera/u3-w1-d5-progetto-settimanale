import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class FilmSingolo extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Col className=" mb-5">
          <Card className="cardFilm">
            <Card.Img style={{ height: "100%" }} src={this.props.FilmSingolo.Poster} />
          </Card>
        </Col>
      </>
    );
  }
}

export default FilmSingolo;
