import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.URL);
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.courseName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
