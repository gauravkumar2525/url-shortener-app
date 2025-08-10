 
import React, { useEffect, useState } from 'react';
import '../App.css'; // import the CSS file here

function AdminPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/admin/urls')
      .then((res) => res.json())
      .then((data) => setUrls(data));
  }, []);

  return (
    <div className="container">
      <h2>All Shortened URLs</h2>
      <table>
        <thead>
          <tr>
            <th>Short Code</th>
            <th>Original URL</th>
            <th>Clicks</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td>
                <a href={`http://localhost:5000/${url.short_code}`} target="_blank" rel="noreferrer">
                  {url.short_code}
                </a>
              </td>
              <td>
                <a href={url.original_url} target="_blank" rel="noreferrer">
                  {url.original_url}
                </a>
              </td>
              <td>{url.clicks}</td>
              <td>{new Date(url.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
