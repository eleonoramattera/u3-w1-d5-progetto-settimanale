import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class FilmSingolo extends Component {
  state = {
    filmOver: false,
  };

  /*handleFilmOver = () => {
    {this.state.filmOver === "true"
    ( this.setState({ filmOver: this.props.FilmSingolo.Title });
)}
  };*/

  render() {
    return (
      <>
        <Col className=" mb-5">
          <Card className="cardFilm" /*onMouseOver={handleFilmOver}*/>
            <Card.Img style={{ height: "100%" }} src={this.props.FilmSingolo.Poster} />
          </Card>
        </Col>
      </>
    );
  }
}

export default FilmSingolo;
