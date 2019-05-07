const descripcion={
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado={
    default: true,
    alias:'c',
    desc:'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear','Crear por hacer',{
        descripcion
    })
    .command('actualizar','Actualiza una tarea por hacer',{
        descripcion,
        completado
    })
    .command('borrar','Elimina una tarea',{
        descripcion
    })
    .help()
    .argv;


module.exports={
    argv
}