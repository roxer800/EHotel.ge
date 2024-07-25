import { NavLink } from "react-router-dom";
import { Col, Row } from "antd";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Row className="bottom-div ">
        <Col span={6}>
          <NavLink to="/" activeclassname="active">
            <button className="footer-btn">
              <i className=" fa-solid fa-magnifying-glass fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
        <Col span={6}>
          <NavLink to="favorites" activeclassname="active">
            <button className="footer-btn">
              <i className="  fa-regular fa-heart  fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
        <Col span={6}>
          <NavLink to="location" activeclassname="active">
            <button className="footer-btn">
              <i className="  fa-solid fa-location-dot  fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
        <Col span={6}>
          <NavLink to="settings" activeclassname="active">
            <button className="footer-btn">
              <i className="  fa-solid fa-gear  fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
