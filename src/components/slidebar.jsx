import React from "react";
import { Search } from "./search";
import { Chats } from "./chats";
import { Navbar } from "./navbar";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};
// export default Sidebar;
