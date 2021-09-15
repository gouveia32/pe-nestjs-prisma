import axios from "axios";

const BaseAPI = axios.create({
  baseURL: "http://localhost:3001"
});

const api = {
  /**
   * Status Service of API
   */
  status: () => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get("status")
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  //Paciente
  /**
   * List of All Pacientes
   */
  pacienteList: () => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get("paciente")
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Create one Paciente
   */
  pacienteCreate: pDataObject => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.post("pacientes", pDataObject)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Read One Paciente by ID
   */
  pacienteRead: pPacienteId => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get(`pacientes/${pPacienteId}`)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Update one Paciente
   */
  pacienteUpdate: (pDataObject, pPacienteId) => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.put(`pacientes/${pPacienteId}`, pDataObject)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Delete one paciente by ID
   */
  pacienteDelete: pPacienteId => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.delete(`pacientes/${pPacienteId}`)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  //Schedules
  /**
   * List of All Schedules of one paciente
   */
  scheduleList: () => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get(`schedules`)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * List of All Schedules of one paciente
   */
  scheduleListOfPaciente: pPacienteId => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get(`schedules/${pPacienteId}`)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Create one schedule
   */
  scheduleCreate: pDataObject => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.post("schedules", pDataObject)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Update one schedule
   */
  scheduleUpdate: (pDataObject, pConditions) => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.put(
        `schedules/${pConditions.paciente_id}/${pConditions.schedule_date}`,
        pDataObject
      )
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Delete one schedule
   */
  scheduleDelete: pConditions => {
    console.log(pConditions);
    return new Promise((pResolve, pReject) => {
      return BaseAPI.delete(
        `schedules/${pConditions.paciente_id}/${pConditions.schedule_date}`
      )
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  //Notes
  /**
   * List of All Notes of one paciente
   */
  noteList: pPacienteId => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get(`notes/${pPacienteId}`)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  /**
   * Create one Note
   */
  noteCreate: pDataObject => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.post("notes", pDataObject)
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  },

  noteRead: pConditions => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get(
        `notes/${pConditions.paciente_id}/${pConditions.schedule_date}`
      )
        .then(rResult => {
          return pResolve(rResult.data);
        })
        .catch(rErr => {
          return pReject(rErr);
        });
    });
  }
};
export default api;
