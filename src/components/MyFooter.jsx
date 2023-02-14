import { Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Row className="text-center mt-5">
        <Col xs={6} className="offset-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <Row>
              <Col>
                <div>
                  <a href="# ">Audio and Subtitles</a>
                </div>
                <div>
                  <a href="# ">Media Center</a>
                </div>
                <div>
                  <a href="# ">Privacy</a>
                </div>
                <div>
                  <a href="# ">Contact us</a>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <a href="# ">Audio Description</a>
                </div>
                <div>
                  <a href="# ">Investor Relations</a>
                </div>
                <div>
                  <a href="# ">Legal Notices</a>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <a href="# ">Help Center</a>
                </div>
                <div>
                  <a href="# ">Jobs</a>
                </div>
                <div>
                  <a href="# ">Cookie Preferences</a>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <a href="# ">Gift Cards</a>
                </div>
                <div>
                  <a href="# ">Terms of Use</a>
                </div>
                <div>
                  <a href="# ">Corporate Information</a>
                </div>
              </Col>
            </Row>

            <Row>
              <div>
                <Col>
                  <Button variant="outline-secondary" size="sm" className="rounded-0 mt-3 f-6" id="buttonFooter">
                    Service Code
                  </Button>
                </Col>
              </div>

              <div>
                <Col className=" mb-2 mt-2 ">
                  <div>© 1997-2022 Netflix, Inc.</div>
                </Col>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default MyFooter;
