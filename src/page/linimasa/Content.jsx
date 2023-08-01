import "./content.scss";
import { Item } from "./Item";
import { Timelines } from "./Timelines";

const Content = () => {
  return (
    <div className="linimasa_content">
      <Timelines />
      <Item />
    </div>
  );
};

export default Content;
