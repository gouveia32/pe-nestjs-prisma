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
      patients: [],
      new_patient: {
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
    const xResponse = await api.patientList();
    if (xResponse.data) {
      this.setState({ patients: xResponse.data });
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
      .patientCreate(this.state.new_patient)
      .then(rResult => {
        console.log(rResult);
        this.props.history.push(`/patients/${rResult.data.insertId}`);
      })
      .catch(rErr => {
        alert(`Erro: ${rErr}`);
      });
  };

  handleInputNameChange = pEvent => {
    this.setState({
      new_patient: {
        ...this.state.new_patient,
        name: pEvent.target.value
      }
    });
  };
  handleInputBirthDateChange = pEvent => {
    this.setState({
      new_patient: {
        ...this.state.new_patient,
        birth_date: pEvent.target.value
      }
    });
  };
  handleInputGenderChange = pEvent => {
    this.setState({
      new_patient: {
        ...this.state.new_patient,
        gender: pEvent.target.value
      }
    });
  };
  handleInputTelephoneChange = pEvent => {
    this.setState({
      new_patient: {
        ...this.state.new_patient,
        telefone: pEvent.target.value
      }
    });
  };
  handleInputHeightChange = pEvent => {
    this.setState({
      new_patient: {
        ...this.state.new_patient,
        height: pEvent.target.value
      }
    });
  };
  handleInputWeightChange = pEvent => {
    this.setState({
      new_patient: {
        ...this.state.new_patient,
        weight: pEvent.target.value
      }
    });
  };

  render() {
    console.log("patient1:",this.state)
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
          <div className="patient-modal">
            <h1>Novo Cadastro de Patient</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <input
                  placeholder="Nome"
                  value={this.state.new_patient.name}
                  onChange={this.handleInputNameChange}
                  required="required"
                  type="text"
                />
                <input
                  placeholder="Data de Nascimento"
                  value={this.state.new_patient.birth_date}
                  onChange={this.handleInputBirthDateChange}
                  required="required"
                  type="date"
                />
                <select
                  value={this.state.new_patient.gender}
                  onChange={this.handleInputGenderChange}
                  required="required"
                >
                  <option value="F">Feminino</option>
                  <option value="M">Masculino</option>
                </select>
                <input
                  placeholder="Telefone: (xx) xxxxx-xxxx"
                  value={this.state.new_patient.telephone}
                  onChange={this.handleInputTelephoneChange}
                  type="tel"
                />
                <input
                  placeholder="Altura"
                  value={this.state.new_patient.height}
                  onChange={this.handleInputHeightChange}
                  type="number"
                  min="0"
                />
                <input
                  placeholder="Peso"
                  value={this.state.new_patient.weight}
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
            <h1>Patients</h1>
            <button type="button" onClick={() => this.openModal()}>
              Novo Patient
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
              {this.patients &&
                this.state.patients.map(patient => (
                  <tr>
                    <td>{patient.nome}</td>
                    <td>{moment(patient.data_nscimento).format("DD/MM/YYYY")}</td>
                    <td>{patient.gender === "F" ? "Feminino" : "Masculino"}</td>
                    <td>{patient.telefone}</td>
                    <td className="coloumns-actions">
                      <a href={"/patients/" + patient.patient_id}>
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
