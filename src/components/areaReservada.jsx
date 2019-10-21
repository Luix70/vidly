import React, { Component } from 'react';
import ListGroup from "./common/listGroup";
import Representante from "./representante";
import getClientes, { getRepres } from "../services/clientes";

class AreaReservada extends Component {
    state = {
        resultConsulta: null,
        listaRepresentantes: [],
        FechaConsulta: "",
        selectedRepre: -1
      };
      handleListGroupClick = async repre => {
        // console.log(repre);
        const lr = await getClientes(repre);
    
        this.setState({
          resultConsulta: lr,
          selectedRepre: repre.codrep,
          FechaConsulta: lr.FechaConsulta
        });
      };
    
      async componentDidMount() {
        this.setState({
          listaRepresentantes: await getRepres()
        });
      }
    render() { 
        return ( <div className="row">
        <div className="col-3 smallprint">
          <div className="row">
            <ListGroup
              onItemSelect={this.handleListGroupClick}
              itemList={this.state.listaRepresentantes}
              itemId="codrep" //identificador del elemento
              itemValue="nombre" // valor que se mostrará
              selectedItem={this.state.selectedRepre}
            />
          </div>
          <div style={{ paddingLeft: "2em" }} className="row">
            {this.state.FechaConsulta === ""
              ? ""
              : "Consulta: " +
                new Date(this.state.FechaConsulta).toLocaleTimeString()}
    
            {"  "}
            {this.state.resultConsulta === null
              ? ""
              : "/ Caché: " +
                new Date(
                  this.state.resultConsulta.FechaCache
                ).toLocaleTimeString()}
          </div>
        </div>
        <div className="col" style={{ backgroundColor: "#d6d8db" }}>
          {" "}
          {this.state.resultConsulta === null ? (
            <span>&nbsp;</span>
          ) : (
            this.state.resultConsulta.representantes.map(repre => (
              <Representante
                key={repre.codrep}
                repres={repre}
                onSort={this.handleSortCustomers}
                sortColumn={this.state.sortColumn}
              />
            ))
          )}
        </div>
      </div> );
    }
}
 
export default AreaReservada;
