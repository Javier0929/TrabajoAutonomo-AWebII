const express = require('express') 
var cors = require('cors');
const { conecxionBaseDatos } = require('../database/db');

class Server{  
    
    constructor(){ 
        this.app= express(); 
        this.port= 9999;

        this.userPath= '/api/usuario'

        this.dbConection();

        this.middlewares();
        this.routes(); 
    }

    middlewares(){


        this.app.use(cors());


        this.app.use( express.json() );


        this.app.use( express.static( 'public' ));
    }

    async dbConection(){
        await conecxionBaseDatos()
    }

    routes(){

       this.app.use( this.userPath, require('../routes/usuario') );
    }

    listen(){ 
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port);
        
        })
    }
}

module.exports=Server;