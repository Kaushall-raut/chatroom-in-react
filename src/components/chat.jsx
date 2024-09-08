import cam from "../img/cam.png";
import add from "../img/add.png";
import more from "../img/more.png";
import { Messages } from "./Messages";
import { Input } from "./input";
import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";

export const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div>
          <img className="userprofile" src={data.user?.photoURL}></img>
          <span
            style={{
              marginBottom: "3rem",
              marginLeft: "2rem",
              fontSize: "1.5rem",
              position: "relative",
              bottom: "0.7rem",
            }}
          >
            {data.user?.displayName}
          </span>
        </div>
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
