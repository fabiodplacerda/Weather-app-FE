import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container d-flex flex-column justify-content-center align-items-center">
      <ErrorIcon sx={{ fontSize: 50 }}></ErrorIcon>
      <p className="mt-2 fs-4">
        Something went wrong while fetching the data please try again
      </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          navigate("/");
        }}
      >
        back to home
      </button>
    </div>
  );
};
