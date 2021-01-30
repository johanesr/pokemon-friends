import { Link } from 'react-router-dom';

import './styles.scss';

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div>Page is not found</div>
      <div><Link to="/list">Return to home page?</Link></div>
    </div>
  )
}

export default NotFound;