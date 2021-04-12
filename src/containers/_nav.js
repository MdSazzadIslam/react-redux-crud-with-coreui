import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavDropdown",
    name: "category",
    route: "/category",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add",
        to: "/category/create",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List",
        to: "/category/List",
      },
    ],
  },
];

export default _nav;
