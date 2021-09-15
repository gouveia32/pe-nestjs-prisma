import React, { Component } from "react";
import SideMenu from "../sideMenu";
import Modal from "react-awesome-modal";
import moment from "moment";
import { MdSearch } from "react-icons/md";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      pacientes: [],
      new_paciente: {
        nome: "",
        data_nscimento: moment().format("YYYY-MM-DD"),
        gender: "F",
        telefone: "",
        peso: null,
        altura: null
      }
    };
  }

  async componentDidMount() {
    const xResponse = await api.pacienteList();
    if (xResponse.data) {
      this.setState({ pacientes: xResponse.data });
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  handleSubmit = pEvent => {
    pEvent.preventDefault();
    api
      .pacienteCreate(this.state.new_paciente)
      .then(rResult => {
        console.log(rResult);
        this.props.history.push(`/pacientes/${rResult.data.insertId}`);
      })
      .catch(rErr => {
        alert(`Erro: ${rErr}`);
      });
  };

  handleInputNameChange = pEvent => {
    this.setState({
      new_paciente: {
        ...this.state.new_paciente,
        name: pEvent.target.value
      }
    });
  };
  handleInputBirthDateChange = pEvent => {
    this.setState({
      new_paciente: {
        ...this.state.new_paciente,
        birth_date: pEvent.target.value
      }
    });
  };
  handleInputGenderChange = pEvent => {
    this.setState({
      new_paciente: {
        ...this.state.new_paciente,
        gender: pEvent.target.value
      }
    });
  };
  handleInputTelephoneChange = pEvent => {
    this.setState({
      new_paciente: {
        ...this.state.new_paciente,
        telefone: pEvent.target.value
      }
    });
  };
  handleInputHeightChange = pEvent => {
    this.setState({
      new_paciente: {
        ...this.state.new_paciente,
        height: pEvent.target.value
      }
    });
  };
  handleInputWeightChange = pEvent => {
    this.setState({
      new_paciente: {
        ...this.state.new_paciente,
        weight: pEvent.target.value
      }
    });
  };

  render() {
    console.log("paciente1:",this.state)
    return (
      <div className="page-container">
        <SideMenu />
        <Modal
          visible={this.state.visible}
          width="400"
          height="365"
          effect="fadeInDown"
          onClickAway={() => this.closeModal()}
        >
          <div className="paciente-modal">
            <h1>Novo Cadastro de Paciente</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <input
                  placeholder="Nome"
                  value={this.state.new_paciente.name}
                  onChange={this.handleInputNameChange}
                  required="required"
                  type="text"
                />
                <input
                  placeholder="Data de Nascimento"
                  value={this.state.new_paciente.birth_date}
                  onChange={this.handleInputBirthDateChange}
                  required="required"
                  type="date"
                />
                <select
                  value={this.state.new_paciente.gender}
                  onChange={this.handleInputGenderChange}
                  required="required"
                >
                  <option value="F">Feminino</option>
                  <option value="M">Masculino</option>
                </select>
                <input
                  placeholder="Telefone: (xx) xxxxx-xxxx"
                  value={this.state.new_paciente.telephone}
                  onChange={this.handleInputTelephoneChange}
                  type="tel"
                />
                <input
                  placeholder="Altura"
                  value={this.state.new_paciente.height}
                  onChange={this.handleInputHeightChange}
                  type="number"
                  min="0"
                />
                <input
                  placeholder="Peso"
                  value={this.state.new_paciente.weight}
                  onChange={this.handleInputWeightChange}
                  type="number"
                  min="0"
                />
              </div>
              <div className="buttons">
                <button type="submit">Salvar</button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => this.closeModal()}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </Modal>
        <div className="page-content">
          <div className="content-header">
            <h1>Pacientes</h1>
            <button type="button" onClick={() => this.openModal()}>
              Novo Paciente
            </button>
          </div>
          <div className="content">
            <table>
              <tr>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>Sexo</th>
                <th>Telefone</th>
                <th></th>
              </tr>
              {this.pacientes &&
                this.state.pacientes.map(paciente => (
                  <tr>
                    <td>{paciente.nome}</td>
                    <td>{moment(paciente.data_nscimento).format("DD/MM/YYYY")}</td>
                    <td>{paciente.gender === "F" ? "Feminino" : "Masculino"}</td>
                    <td>{paciente.telefone}</td>
                    <td className="coloumns-actions">
                      <a href={"/pacientes/" + paciente.paciente_id}>
                        <MdSearch size={24} color="#000" />
                      </a>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
