import { Component } from "react";
import { Row, ListGroup, Alert, Spinner } from "react-bootstrap";
import FilmSingolo from "./FilmSingolo";

class NewReleases extends Component {
  state = {
    film: [],
    loading: true,
    error: false,
    errorMessage: "",
  };

  fetchFilmTrendingNow = async () => {
    try {
      const res = await fetch("http://www.omdbapi.com/?apikey=e340c445&s=pretty little liars");
      if (res.ok) {
        const data = await res.json();
        console.log(data);

        if (data.res) {
          this.setState({ loading: false, error: true, errorMessage: "ERRORE" });
        } else {
          this.setState({ film: data.Search.splice(0, 6), loading: false, error: false });
        }
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        errorMessage: "ERRORE",
      });
    }
  };

  componentDidMount = () => {
    this.fetchFilmTrendingNow();
  };

  render() {
    return (
      <>
        <h3 style={{ color: "white" }}>New Releases</h3>
        <Row xs={1} md={4} lg={6}>
          {this.state.film.map((film, index) => (
            <FilmSingolo FilmSingolo={film} key={`film-${index}`} />
          ))}

          {this.state.error && (
            <Alert className="text-center" variant="danger">
              "errore"
            </Alert>
          )}

          {this.state.loading && (
            <div>
              <Spinner animation="border" variant="success" />
            </div>
          )}

          {this.state.film.length === 0 && !this.state.loading && !this.state.error && (
            <ListGroup>Non ci sono film.</ListGroup>
          )}
        </Row>
      </>
    );
  }
}

export default NewReleases;
