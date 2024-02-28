.open PruebaTecnica.db
create table Notas (id INTEGER PRIMARY KEY AUTOINCREMENT,titulo TEXT,nota TEXT,fecha TEXT);
insert into Notas values(1,'Nota Inicial','Primera Nota de prueba','02-27-2024');
update Notas set titulo = 'titulo' , nota = 'Nota' , fecha = '' where id = 1;
select * from Notas
delete from Notas;