import React, { useState } from "react";

const AdvancedState = () => {
  const [currVal, setCurrVal] = useState({
    user: "Bajwa Mandeep",
    age: 24,
    year: 2024,
  });

  const changeState = () => {
    const newCurrVal = { ...currVal };
    newCurrVal.user = "Mandeep Singh Bajwa";
    newCurrVal.age = 26;
    newCurrVal.year = 2025;
    setCurrVal(newCurrVal);
  };
  return (
    <div>
      <h3>
        My name is {currVal.user} and am {currVal.age} years old in{" "}
        {currVal.year}.
      </h3>
      <button type="button" onClick={changeState}>
        Change State
      </button>
    </div>
  );
};

export default AdvancedState;

// import React, { useState } from "react";

// const AdvancedState = () => {
//   const [currVal, setCurrVal] = useState([1, 3, 5]);

//   const changeState = () => {
//     const newCurrVal = [...currVal];
//     newCurrVal.push(7, 10, 13, 25, 365);

//     setCurrVal(newCurrVal);
//   };
//   return (
//     <div>
//       {currVal.map((value, index) => (
//         <h3 key={index}>{value}</h3>
//       ))}
//       <button type="button" onClick={changeState}>
//         Change State
//       </button>
//     </div>
//   );
// };

// export default AdvancedState;

// import React, { useState } from "react";

// const AdvancedState = () => {
//   const [currVal, setCurrVal] = useState([1, 3, 5]);

//   const changeState = () => {
//     setCurrVal((prev) => [...prev, 7, 10, 13, 25, 365]);
//   };
//   return (
//     <div>
//       {currVal.map((value, index) => (
//         <h3 key={index}>{value}</h3>
//       ))}
//       <button type="button" onClick={changeState}>
//         Change State
//       </button>
//     </div>
//   );
// };

// export default AdvancedState;
