import { Link } from "react-router-dom";
import './Unknown.css';

function Unknown() {
    return (
      <div className="Unknown-body">
        <p>Are you lost? Let's take you home...</p>
        <Link className="Home-button" to="/home">Take me home to the place I belong</Link>
      </div>
    )
  }

export default Unknown;