/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="card w-50 mx-auto">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
