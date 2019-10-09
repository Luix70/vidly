import React from "react";

const ListGroup = ({ itemList, handleClick }) => {
  return (
    <ul className="list-group list-group-flush  " style={{ cursor: "pointer" }}>
      <li
        onClick={() => handleClick()}
        key={"0"}
        className="list-group-item d-flex justify-content-between align-items-center menu-lateral"
        style={{ fontSize: "1.1rem", fontWeight: "bolder" }}
      >
        VER TODOS
      </li>
      {itemList.map(item => (
        <li
          onClick={() => handleClick(item)}
          key={item.codrep}
          className="list-group-item d-flex justify-content-between align-items-center menu-lateral"
        >
          {item.nombre}
          <span className="badge badge-primary badge-pill">
            {item.totalClientes}
          </span>{" "}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
