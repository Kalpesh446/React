import React, { useState } from "react";

const Calculation = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "300px", margin: "auto" }}>
      <form style={{ marginBottom: "15px" }}>
        <input
          type="number"
          name="value1"
          value={value1}
          onChange={(e) => setValue1(parseFloat(e.target.value))}
          style={{ marginRight: "10px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input type="number" name="value2" value={value2} onChange={(e) => setValue2(parseFloat(e.target.value))} style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }} />
      </form>
      <div style={{ padding: "10px", backgroundColor: "#fff", borderRadius: "4px", border: "1px solid #ccc", color: "black" }}>
        Addition: {value1 + value2} <br />
        Subtraction: {value1 - value2} <br />
        Multiplication: {value1 * value2} <br />
        Division: {value2 !== 0 ? (value1 / value2).toFixed(2) : "Division by zero not allowed"}
      </div>
    </div>
  );
};

export default Calculation;
