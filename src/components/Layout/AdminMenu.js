import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div>
        <div className="list-group">
          <h4>ADMIN PANEL</h4>
          <NavLink
            to="/dashboard/admin/create-category "
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product "
            className="list-group-item list-group-item-action"
          >
            Create product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products "
            className="list-group-item list-group-item-action"
          >
            products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders "
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
