import React, { useEffect, useState } from "react";
import "./App.css";
import toast from "react-hot-toast";

const BACKEND_URL = "http://localhost:3000/api/v1/extract";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(BACKEND_URL, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        toast.error(`${error}`);
        console.error("Failed to fetch data:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1 className="heading">Table data extracted from pdf</h1>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>Disability Category</th>
                <th rowSpan={2}>Participants</th>
                <th rowSpan={2}>Ballots Completed</th>
                <th rowSpan={2}>Ballots Incompleted/Terminated</th>
                <th colSpan={2}>Results Accuracy</th>
              </tr>
              <tr>
                <th>Accuracy</th>
                <th>Time to complete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td className="table_data">{data.Disability_category}</td>
                  <td className="table_data">{data.Participants}</td>
                  <td className="table_data">{data.Ballots_completed}</td>
                  <td className="table_data">{data.Ballots_incompleted}</td>
                  <td className="table_data">{data.Results}</td>
                  <td className="table_data">{data.Time_to_complete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
