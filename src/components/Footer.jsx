export const Footer = () => {
  const date = new Date();
  return (
    <div
      id="footer"
      className="d-flex justify-content-center align-items-center"
    >
      <p className="text-center">&copy; {date.getFullYear()} DFCorp</p>
    </div>
  );
};
