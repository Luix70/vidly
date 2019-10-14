import React, { Component } from "react";
import paginate from "../utils/paginate";
import _ from "lodash";
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
    const itemsOrdenados = _.orderBy(itemList, ["nombre"], ["asc"]);
    const itemsToShow = [
      { codrep: 0, nombre: "Seleccionar Todo" },
      ...paginate(itemsOrdenados, paginaActual, itemsPerPage),
      { codrep: -1, nombre: "Borrar Selección" }
    ];

    return (
      <React.Fragment>
        <ul
          className="list-group list-group-flush  "
          style={{ cursor: "pointer" }}
        >
          {itemsToShow.map(item => {
            return (
              <li
                onClick={() => onItemSelect(item)}
                key={item[itemId]}
                className={
                  item[itemId] === 0
                    ? selectedItem === 0
                      ? this.state.defaultItemClass + " listGroupHeader active "
                      : this.state.defaultItemClass + " listGroupHeader"
                    : item[itemId] === -1
                    ? selectedItem === -1
                      ? this.state.defaultItemClass + " listGroupFooter active"
                      : this.state.defaultItemClass + " listGroupFooter"
                    : selectedItem === item[itemId]
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
