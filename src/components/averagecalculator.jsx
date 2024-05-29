import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [numType, setNumType] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleTypeChange = (e) => {
    setNumType(e.target.value);
  };

  const fetchNumbers = async () => {
    try {
      setError(null);
      const token = localStorage.getItem('auth')
      const response = await axios.get(`http://20.244.56.144/test/${numType}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(loginData),
      });
      setResponseData(response.data);
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <div>
        <label htmlFor="numType">Select Number Type: </label>
        <select id="numType" value={numType} onChange={handleTypeChange}>
          <option value="">--Select--</option>
          <option value="primes">P</option>
          <option value="fibo">F</option>
          <option value="even">E</option>
          <option value="rand">R</option>
        </select>
        <button onClick={fetchNumbers} disabled={!numType}>
          Fetch Numbers
        </button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {responseData && (
        <div>
          <h2>Response Data</h2>
          <p><strong>Previous Window State:</strong> {responseData.windowPrevState.join(', ')}</p>
          <p><strong>Current Window State:</strong> {responseData.windowCurrState.join(', ')}</p>
          <p><strong>Numbers:</strong> {responseData.numbers.join(', ')}</p>
          <p><strong>Average:</strong> {responseData.avg}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
