const mongoose = require('mongoose');

// connecte a une base de donnée
mongoose.connect('mongodb://localhost:27017/garage',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err => console.log(err))
//Création d’un schéma

const carSchema = new mongoose.Schema({
    
    brand:String,
    model:String,
    year:Number,
    created:Date

})
const Car = mongoose.model('Car', carSchema);
Car.insertMany
([ 
    { brand: 'Aston Martin', model: "DB9",year:2010}, 
    { brand: 'Range Rover', model: "Discovery Sport",year:2017}, 
   
]).then(function(){ 
    console.log("Data inserted") 
}).catch(function(error){ 
    console.log(error)   
}); 