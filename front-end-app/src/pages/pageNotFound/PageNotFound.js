import Button from '../../components/button/button';
import './PageNotFound.css';

function PageNotFound() {
    return (
      <div className="PageNotFound-body">
        <p>Are you lost? Let's take you home...</p>
        <Button link="/home" label="Take me home to the place I belong" />
      </div>
    )
  }

export default PageNotFound;