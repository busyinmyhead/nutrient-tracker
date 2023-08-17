import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FoodTracker from './FoodTracker';
import DietPrediction from './DietPrediction';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.header}>You don't have to eat less or more, you just have to eat right!!</h1>
        
        <div style={styles.buttonContainer}>
          <Link to="/food-tracker" style={styles.button}>
            Track Food
          </Link>
          <Link to="/diet-prediction" style={styles.button}>
            Predict Diet
          </Link>
        </div>
        <Routes>
          <Route path="/food-tracker" element={<FoodTracker />} />
          <Route path="/diet-prediction" element={<DietPrediction />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#e02222',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default App;
