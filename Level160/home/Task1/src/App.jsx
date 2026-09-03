import React from "react";

function SafeChart({ data }) {
  try {
    return <ComplexChart data={data} />;
  } catch (error) {
    console.error("Chart crashed:", error);

    return (
      <table border="1">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}


const sampleData = [
  { Name: "Alice", Age: 25, Country: "USA" },
  { Name: "Bob", Age: 30, Country: "UK" },
  { Name: "Charlie", Age: 28, Country: "Georgia" },
];

const App = () => {
  return (
    <div>
      <h1>Safe Chart Example</h1>
      <SafeChart data={sampleData} />
    </div>
  )
}

export default App

