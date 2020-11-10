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

Car.deleteMany({brand:"Renault"},function(err){
    if(err){
console.log('err')
    }
})

   
    
 


