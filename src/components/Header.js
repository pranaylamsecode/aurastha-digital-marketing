import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
      <img
  src="/logo.png"
  alt="Aurastha Logo"
  style={{
    width: "50px",
    height: "50px",
    objectFit: "contain",
    filter: "invert(100%)",
  }}
/>
        <h1 style={styles.title}>
        <Link to="/" style={styles.link}><span style={{ color: "#FFD700" }}>Aurastha </span> {" "}
          <span style={{ color: "#00BFFF" }}> {" "}Digital Marketing</span></Link>
        </h1>
      </div>

      <nav style={{ marginTop: "10px" }}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/login" style={styles.link}>Admin Login</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111",
    color: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },
  logo: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    borderRadius: "5px"
  },
  title: {
    fontSize: "28px",
    margin: 0,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center"
  },
  link: {
    margin: "0 15px",
    color: "#FFD700",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  }
};

export default Header;
