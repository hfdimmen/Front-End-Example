import { Link } from "react-router-dom";
import './button.css';

function button({label, link}) {
    const default_link = "/";

    return <Link data-testid="button" className="button" to={link || default_link}>{label}</Link>
  }

export default button;