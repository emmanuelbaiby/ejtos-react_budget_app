import React, { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";
const Curreny = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setCurrency] = useState(currency);
  const handleBudgetChange = (event) => {
    const value = event.target.value;
    setCurrency(value); // Update local state
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
    console.log(newCurrency);
  };
  const greenBorderStyle = {
    padding: '15px',

    // Adjust the green border color as needed
  };

  const greenBackgroundStyle = {
    backgroundColor: '#8BC34A', // Adjust the green background color as needed
    color: '#fff', // White color for the selected option text
  };

  return (
    <div >
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={handleBudgetChange}
        style={{ ...greenBorderStyle, ...greenBackgroundStyle }}
      >
        <option style={greenBackgroundStyle} defaultValue>Currency (£ Pound)</option>
        <option style={greenBackgroundStyle} value="$" name="dollar">
          $ Dollar
        </option>
        <option style={greenBackgroundStyle} value="£" name="pounds">
          £ Pound
        </option>
        <option style={greenBackgroundStyle} value="€" name="euro">
          € Euro
        </option>
        <option style={greenBackgroundStyle} value="₽" name="rubee">
          ₽ Rubee
        </option>
      </select>
    </div>
  );


};
export default Curreny;
