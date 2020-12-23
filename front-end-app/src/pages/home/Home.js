import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
      <div className="Home-body">
        <Link className="Home-button" to="/facts">Show me facts, please</Link>
      </div>
    )
  }

export default Home;