import React, { useEffect, useState } from "react";
import { Button } from "../index";
export const SideBar = () => {
  const [sideNavExpanded, setSideNavExpanded] = useState(true);

  const toogleSidebar = () => {
    setSideNavExpanded((prev) => !prev);
  };
  return (
    <div
      className="sidebar-container"
      style={{ width: sideNavExpanded ? 300 : 50 }}
    >
      <Button
        title="open"
        onClick={() => {
          toogleSidebar();
        }}
      />
    </div>
  );
};
