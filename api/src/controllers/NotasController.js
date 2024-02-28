import { getConnection } from "../database/connection.js"
import { Notas } from "../database/querys/Notas.js"

export const ObtenerNotas = async (req, res, next) => {
  let response = {};
  try {
    const db = await getConnection();
    const querys = Notas();
    const data = await db.all(querys.obtenerNotas);
    response.data = data;
    response.message = "Notas obtenidas con éxito";
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
    const {titulo,nota,fecha} = req.body;
    const db = await getConnection();
    const querys = Notas();
    //Se genera un id unico basado en el timestamp actual
    const id = Math.floor(Date.now() /1000);

    const resultado = await db.run(querys.crearNota,{
      ':titulo':titulo,
      ':nota':nota,
      ':fecha':fecha,
      ':titulo':titulo,
      ':id':id
    });

    response.data = resultado.lastID;
    response.message = "Nota agregada con éxito";
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
    const {titulo,nota,fecha,id} = req.body;
    const db = await getConnection();
    const querys = Notas();
    
    const resultado = await db.run(querys.actualizarNota,{
      ':titulo':titulo,
      ':nota':nota,
      ':fecha':fecha,
      ':titulo':titulo,
      ':id':id
    });

    response.data = resultado.id;
    response.message = "Nota editada con éxito";

    res.status(200).json(response);
  } catch (error) {
    console.log("Se produjo una excepcion al procesar la peticion:", error);
    response.message = "Ocurrió un error al procesar la petición";
    res.status(400).json(response);
  }
};
