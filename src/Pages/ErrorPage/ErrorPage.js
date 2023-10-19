import './ErrorPage.css';
import { useNavigate} from "react-router-dom";

const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <div className="error-container">
      <img className="img-fluid rounded mb-4" width="700" src="./assets/confused_computer.png" alt="confused computer" />
      <h1 className="error-title">Whoops... Looks like nothing is here!</h1>
      <p className="error-message mt-5">We couldn't find that page!</p>
      <h1 className="error-title my-5">Page Not Found</h1>
      <button className="button" onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;