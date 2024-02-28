export const Notas = () => {

  const tablename = "Notas"

  return {
    crearNota: `insert into ${tablename} values (:id,:titulo,:nota,:fecha)`,
    actualizarNota: `update ${tablename} set titulo = :titulo , nota = :nota , fecha = :fecha where id = :id `,
    obtenerNotas: `select * from ${tablename} `,
    eliminarNota: `delete from ${tablename} where id = :id `,
  };
}

