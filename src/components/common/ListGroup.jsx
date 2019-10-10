import React, { Component } from "react";
import Pagination from "./Pagination";
import paginate from "../utils/paginate";

class ListGroup extends Component {
  state = {
    paginaActual: 3,
    itemsPerPage: 15,
    itemList: [],
    handleClick: {}
  };

  handlePageClicked = page => {
    this.setState({ paginaActual: page });
  };

  render() {
    const { itemList, handleClick } = this.props;
    const { paginaActual, itemsPerPage } = this.state;

    const itemsToShow = paginate(itemList, paginaActual, itemsPerPage);

    return (
      <React.Fragment>
        <ul
          className="list-group list-group-flush  "
          style={{ cursor: "pointer" }}
        >
          <li className="pagination">
            <Pagination
              itemCount={itemList.length}
              currentPage={paginaActual}
              itemsPerPage={itemsPerPage}
              pageClicked={this.handlePageClicked}
            />
          </li>
          <li
            onClick={() => handleClick()}
            key={"0"}
            className="list-group-item d-flex justify-content-between align-items-center menu-lateral"
            style={{ fontSize: "1.1rem", fontWeight: "bolder" }}
          >
            Todos los representantes
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
