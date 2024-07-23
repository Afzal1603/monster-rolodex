import "./CardList.style.css";
import { Card } from "../card/card.component";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};
