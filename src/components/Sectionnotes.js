import React, { useEffect, useState } from "react";

const Sectionnotes = () => {
  const [results, setResults] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/codes/${global.values.code}/details`);
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values.code]);

  console.log("our result is", results);
  return (
    <div className="section">
      <div>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {results && (
              <tr key={results.code}>
                <td>{results.section.code}</td>
                <td>{results.section.icdReference}</td>
              </tr>
            )}
            {results &&
              results.section.notes.map((note, index) => (
                <tr key={index}>
                  <td>{note.classifications}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sectionnotes;
