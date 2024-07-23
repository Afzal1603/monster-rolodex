import "./card.style.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=120x120`}
        alt="monsters"
      />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
