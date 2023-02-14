import { Row, Col, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";

const TopMain = () => {
  return (
    <div>
      <Row className="w-100">
        <Col xs={2}>
          <h2 className="mb-4 text-white">TV Shows</h2>
        </Col>

        <Col xs={2}>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              className="rounded-0"
              title="Genres"
              id="input-group-dropdown-1">
              <Dropdown.Item className="bg-secondary text-white" href="#">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item className="bg-secondary text-white" href="#">
                Drama
              </Dropdown.Item>
              <Dropdown.Item className="bg-secondary text-white" href="#">
                Thriller
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TopMain;

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>;
