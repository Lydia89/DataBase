

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
Car.create({
       id: 1,
       brand: 'BMW',
       model: 'BMX X7',
       year:2018,
       created:"12/12/2018"
 }).then(body => console.log(body))
  .catch(err => console.error(err))

