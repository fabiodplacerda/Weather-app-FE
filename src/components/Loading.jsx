import "./loading.css";

export const Loading = ({ text }) => {
  return (
    <div id="loading-container">
      <div className="loader"></div>
      <p className="fs-3 text-center">{text}</p>
    </div>
  );
};
