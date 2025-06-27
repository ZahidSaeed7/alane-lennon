// NotFoundPage component for 404 routes
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/Home.module.css';
import notFoundStyles from './NotFound.module.css';

const NotFoundPage: React.FC = () => (
  <div className={notFoundStyles.notFoundRoot}>
    <h1 className={`fw-bold ${styles.title}`}>404 - Page Not Found</h1>
    <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="btn btn-primary">Go Home</Link>
  </div>
);

export default NotFoundPage; 