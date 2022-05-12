const {reponse, request} = require("express"); //requerimos el modulo de express
const express = require("express");
const mongo = require("mongodb").MongoClient;
const cors = require('cors');
//const app=express(); //definimos una app de express

/*app.use(cors({
    origin: '*',
    credentials:true,
    optionsSuccessStatus:200,
}));*/
// cross
const corsOptions ={
    origin:'*',
    credentials: true,
    optionSuccessStatus:200,
}
const app = express(); //definimos una app de express

app.use(express.json()); //Middleware
app.use(cors(corsOptions))
app.crossOriginIsolated=true;

const url="mongodb://localhost:27017";

let db, alumnos, autor, users
mongo.connect(url,{
   useNewUrlParser:true,
   useUnifiedTopology:true 
},
(err,client)=>{
    if(err){
        console.log(err);
        return;
    }
    db=client.db("cursojavascript");
    console.log("conentando a la bd");
    alumnos=db.collection("alumnos");
    autor=db.collection("autor");
    users=db.collection("users");
});

app.get("/users", (request,response)=>{
    console.log("User...");
    users.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            reponse.status(500).json({err:err});
            return;
        }
        response.status(200).json({users:items});
    });
});

app.get("/demo", (request,response)=>{
    console.log("Se ejecuto la ruta demo...");
    //response.send("ok");
    response.status(200).json({ok:true});
});

app.get("/alumnos", (request,response)=>{
    console.log("Se ejecuto la ruta demo...");
    //response.send("ok");
    alumnos.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            reponse.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumnos:items});
        
    });
    //response.status(200).json({ok:true});
});
app.get("/autor", (request,response)=>{
    console.log("Se ejecuto la ruta Autor...");
    autor.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            reponse.status(500).json({err:err});
            return;
        }
        response.status(200).json({autor:items});
        
    });
});
app.post("/autor",(request,response)=>{
    autor.insertOne({
            nombre:request.body.nombre,
            foto:request.body.foto,
            ciudad:request.body.ciudad,
            correo:request.body.correo,
            puesto:request.body.puesto,
            fecha:request.body.fecha,
            status:request.body.status
        },
        (err,result)=>{
            if(err){
                console.log(err);
                reponse.status(500).json({error:err});
            }
            response.status(200).json({ok:true});
        });
});
//db.alumnos.insert({name:"Havy",apellido:"Aguilar",ciudad:"Zitacuaro"})
app.post("/alumnos", (request,response) => {
    alumnos.insertOne({
        name:request.body.name,        
        apellido:request.body.apellido,
        ciudad:request.body.ciudad
    },
    (err, result) => {
        if(err){
            console.log(err);
            reponse.status(500).json({err:err});
            return;
        }
        response.status(200).json({ok:true});
    });
});
let ObjectId = require('mongodb').ObjectId; //genenrar una variable de funcion que viene incluida en mongodb
app.get("/alumnos/:id", (request,response) => {
    let alumnoId=request.params.id;
    alumnos.findOne({_id:ObjectId(alumnoId)}, function(err, alumno){
        if(err){
            console.log(err);
            reponse.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumno:alumno});
    });
});

app.listen(3005,()=>{
    console.log("Escuchando en el puerto 3005...");
});