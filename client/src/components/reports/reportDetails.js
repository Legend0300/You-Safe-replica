import React, { useState, useEffect } from 'react';

const ReportDetails = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/reportingDetails/643c41b20b00a090edd99140`)
      .then(res => res.json())
      .then(data => setReport(data))
      .catch(error => console.error(error));
  }, []);

  if (!report) {
    return <div>Loading report...</div>;
  }

  return (
    <div>
      <h1>Report Details</h1>
      <p>Department: {report.department}</p>
      <p>Area: {report.area}</p>
      <p>Description: {report.description}</p>
      <p>Date: {report.date}</p>
      <div>
        <h3>Photos</h3>
        <ul>
          {/* {report.photos.map(photo => (
            <li key={photo.id}>
              <img src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png" alt="Report Photo" />
            </li>
          ))} */}
          <li>
            <img src="data:image/png;base64,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" alt="Report Photo" />
          </li>
        </ul>
      </div>
      <p>Responsibility: {report.responsibility}</p>
    </div>
  );
};

export default ReportDetails;
