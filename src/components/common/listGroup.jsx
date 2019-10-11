import React, { Component } from "react";
import paginate from "../utils/paginate";

class ListGroup extends Component {
  state = {
    itemList: [],
    onItemSelect: {},
    defaultItemClass:
      "list-group-item d-flex justify-content-between align-items-center menu-lateral"
  };

  render() {
    const {
      itemList,
      onItemSelect,
      paginaActual,
      itemsPerPage,
      itemId,
      itemValue,
      selectedItem
    } = this.props;

    const itemsToShow = paginate(itemList, paginaActual, itemsPerPage);

    return (
      <React.Fragment>
        <ul
          className="list-group list-group-flush  "
          style={{ cursor: "pointer" }}
        >
          <li
            onClick={() => onItemSelect(0)} // item es un objeto
            key={0}
            className={this.state.defaultItemClass}
            style={{ fontSize: "1.1rem", fontWeight: "bolder" }}
          >
            Ver Todos
          </li>
          {itemsToShow.map(item => {
            return (
              <li
                onClick={() => onItemSelect(item)}
                key={item[itemId]}
                className={
                  selectedItem === item[itemId]
                    ? this.state.defaultItemClass + " active"
                    : this.state.defaultItemClass
                }
              >
                {item[itemValue]}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

ListGroup.defaultProps = {
  itemId: "_id",
  itemValue: "name"
};

export default ListGroup;
