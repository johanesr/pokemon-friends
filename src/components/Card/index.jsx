import './styles.scss';

function Card(props) {
  return (
    <div className="card-wrapper">
      <div>{props.name}</div>
    </div>
  );
}

export default Card;