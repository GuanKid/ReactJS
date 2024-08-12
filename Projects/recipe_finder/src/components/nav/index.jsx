// Navigation.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './index.module.css';

const Navigation = ({ user }) => {
  return (
    <div className={styles.navContainer}>
      <Nav className={`nav-tabs ${styles.slantedTabs}`} activeKey="products">
        <Nav.Item>
          <Nav.Link eventKey="products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="solutions">Solutions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="features">Features</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="training">Training</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="company">Company</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className={styles.loginSection}>
        {user ? (
          <div className={styles.profile}>
            <img src={user.photoURL} alt="Profile" className={styles.profilePic} />
            <span>{user.displayName}</span>
          </div>
        ) : (
          <button className={styles.loginButton}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
