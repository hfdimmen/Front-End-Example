import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
      <body className="Home-body">
        <p>Cat facts coming soon!</p>
        <Link to="/facts">Facts</Link>
      </body>
    )
  }

export default Home;