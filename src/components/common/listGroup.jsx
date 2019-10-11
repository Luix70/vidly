import React, { Component } from "react";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";

class ListGroup extends Component {
  state = {
    itemList: [],
    handleClick: {}
  };

  render() {
    const {
      itemList,
      handleClick,
      itemID,
      itemValue,
      paginaActual,
      itemsPerPage
    } = this.props;

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
            Todos los representantes
          </li>
          {itemsToShow.map(item => (
            <li
              onClick={() => handleClick(item)}
              key={item[itemID]}
              className="list-group-item d-flex justify-content-between align-items-center menu-lateral"
            >
              {item[itemValue]}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

ListGroup.propTypes = {
  itemList: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  itemID: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired,
  paginaActual: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};
export default ListGroup;
