export const Notas = () => {

    const tablename = "Notas"

    return {
      crearNota: `insert into ${tablename} values (?,?,?,?)`,
      actualizarNota: `update ${tablename} set titulo = ? , nota = ? , fecha = ? where id = ? `,
      obtenerNotas: `select * from ${tablename} `,
      eliminarNota: `delete from ${tablename} where id = ? `,
    };
}

