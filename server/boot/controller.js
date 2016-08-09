module.exports = function(app){
    var router = app.loopback.Router();
    var Eventos = require('../dataPrueba/Eventos.json');
    var Evento = app.models.Evento;

    Evento.create(Eventos , function(err, response){
	if (err) {
            console.log("Error en crear los datos de prueba: ", err);
        } else {
            console.log("Creado con exito")
        }
    });

    app.use(router);
    
}
