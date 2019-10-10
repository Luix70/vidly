import React from "react";
import Pagination from "./Pagination";
import paginate from "../utils/paginate";

const ListGroup = ({ itemList, handleClick }) => {
  const itemsToShow = paginate(itemList, 2, 10);
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
          VER TODOS
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
        <li className="pagination">
          <Pagination
            itemCount={itemList.length}
            currentPage={3}
            itemsPerPage={10}
            pageClicked={handlePageClicked}
          />
        </li>
      </ul>
    </React.Fragment>
  );
};

const handlePageClicked = page => {
  console.log(page);
};

export default ListGroup;
