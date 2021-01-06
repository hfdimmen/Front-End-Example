import './Home.css';
import Button from '../../components/button/button';

function Home() {
    return (
      <div className="Home-body">
        <p>Are you ready for some facts?</p>
        <Button label="Show me facts, please" link="/facts" />
      </div>
    )
  }

export default Home;