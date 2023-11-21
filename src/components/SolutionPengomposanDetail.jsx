import React, { useState, useEffect } from 'react';
import SolutionPengomposanDetailCss from './SolutionPengomposanDetailCss.module.css';
import { Link } from 'react-router-dom';

export default function SolutionPengomposanDetail() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://652637e267cfb1e59ce802d9.mockapi.io/test')
      .then(response => response.json())
      .then(data => setData(data[0])) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const { article } = data;

  return (
    <div className={SolutionPengomposanDetailCss.container}>
      <div className={SolutionPengomposanDetailCss.arrowBack}>
        <Link to="/solution/pengomposan">
          <img src="https://i.ibb.co/DKVPT3z/arrow-507257.png" alt="arrow-507257" border="0" />
        </Link>
      </div>
      {article && (
        <div>
          <style>
            {Object.keys(SolutionPengomposanDetailCss)
              .map(key => SolutionPengomposanDetailCss[key])
              .join('')}
          </style>
          <div dangerouslySetInnerHTML={{ __html: article }} />
        </div>
      )}
    </div>
  );
}
