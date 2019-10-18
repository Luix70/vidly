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
            // determinamos qué clase aplicar al item
            const claseItem =
              item[itemId] === 0 // es el item 0 (encabezado) ?
                ? selectedItem === 0 // es el seleccionado ?
                  ? this.state.defaultItemClass + " listGroupHeader active " // le aplicamos el estilo correspondiente
                  : this.state.defaultItemClass + " listGroupHeader"
                : item[itemId] === -1 // es el ítem -1 (pie)
                ? selectedItem === -1 // es el seleccionado ?
                  ? this.state.defaultItemClass + " listGroupFooter active" // le aplicamos el estilo correspondiente
                  : this.state.defaultItemClass + " listGroupFooter"
                : selectedItem === item[itemId] // // es el seleccionado y no es ni encabezado ni pie?
                ? this.state.defaultItemClass + " active" // le aplicamos el estilo correspondiente
                : this.state.defaultItemClass;

            return (
              <li
                onClick={() => onItemSelect(item)}
                key={item[itemId]}
                className={claseItem}
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
