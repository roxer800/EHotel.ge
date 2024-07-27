import { NavLink } from "react-router-dom";
import { Col, Row } from "antd";
import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Row className={styles.bottomDiv}>
        <Col span={6}>
          <NavLink to="/" activeclassname={styles.active}>
            <button className={styles.footerBtn}>
              <i className=" fa-solid fa-magnifying-glass fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
        <Col span={6}>
          <NavLink to="favorites" activeclassname={styles.active}>
            <button className={styles.footerBtn}>
              <i className="  fa-regular fa-heart  fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
        <Col span={6}>
          <NavLink to="location" activeclassname={styles.active}>
            <button className={styles.footerBtn}>
              <i className="  fa-solid fa-location-dot  fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
        <Col span={6}>
          <NavLink to="settings" activeclassname={styles.active}>
            <button className={styles.footerBtn}>
              <i className="  fa-solid fa-gear  fa-2xl"></i>
            </button>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
