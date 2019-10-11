import React, { Component } from "react";
import paginate from "../utils/paginate";

class ListGroup extends Component {
  state = {
    itemList: [],
    handleClick: {}
  };

  render() {
    const { itemList, handleClick, paginaActual, itemsPerPage } = this.props;

    const itemsToShow = paginate(itemList, paginaActual, itemsPerPage);

    return (
      <React.Fragment>
        <ul
          className="list-group list-group-flush  "
          style={{ cursor: "pointer" }}
        >
          <li
            onClick={() => handleClick()}
            key={"0"}
            className="list-group-item d-flex justify-content-between align-items-center menu-lateral"
            style={{ fontSize: "1.1rem", fontWeight: "bolder" }}
          >
            Ver Todos
          </li>
          {itemsToShow.map(item => (
            <li
              onClick={() => handleClick(item)}
              key={item.codrep}
              className="list-group-item d-flex justify-content-between align-items-center menu-lateral"
            >
              {item.nombre}
              <span className="badge badge-primary badge-pill">
                {item.totalClientes}
              </span>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ListGroup;
