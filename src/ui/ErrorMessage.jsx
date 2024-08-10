import { useAuth } from "../context/AuthContext";

const ErrorMessage = () => {
  const { error } = useAuth();
  return (
    <div className="error-message">
      <span>⛔</span>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
