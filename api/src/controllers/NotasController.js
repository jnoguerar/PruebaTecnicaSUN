
export const ObtenerNotas = async (req, res, next) => {
    let response = {};
    try {
      res.status(200).json(response);
    } catch (error) {
      console.log("Se produjo una excepcion al procesar la peticion:", error);
      response.message = "Ocurrió un error al procesar la petición";
      res.status(400).json(response);
    }
  };
  
  export const RegistrarNota = async (req, res, next) => {
    let response = {};
    try {
      res.status(200).json(response);
    } catch (error) {
      console.log("Se produjo una excepcion al procesar la peticion:", error);
      response.message = "Ocurrió un error al procesar la petición";
      res.status(400).json(response);
    }
  };
  
  export const EliminarNota = async (req, res, next) => {
    let response = {};
    try {
      res.status(200).json(response);
    } catch (error) {
      console.log("Se produjo una excepcion al procesar la peticion:", error);
      response.message = "Ocurrió un error al procesar la petición";
      res.status(400).json(response);
    }
  };
  
  export const ModificarNota = async (req, res, next) => {
      let response = {};
      try {
        res.status(200).json(response);
      } catch (error) {
        console.log("Se produjo una excepcion al procesar la peticion:", error);
        response.message = "Ocurrió un error al procesar la petición";
        res.status(400).json(response);
      }
    };
  