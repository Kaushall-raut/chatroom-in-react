import cam from "../img/cam.png";
import add from "../img/add.png";
import more from "../img/more.png";
import { Messages } from "./Messages";
import { Input } from "./input";

export const Chat = () => {
  // const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Soul</span>
        <div className="chatIcons">
          <img src={cam} alt="camera" />
          <img src={add} alt="add " />
          <img src={more} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
