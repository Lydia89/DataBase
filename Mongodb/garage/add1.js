

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
    created:{ type: Date, default: Date.now }

})
const Car = mongoose.model('Car', carSchema);

/*
const car1 = new Car({
    brand:"Renault",
    model:"Espace",
    year:1999
})
car1.save().then(res => console.log(res))
*/
/*
const car2 = new Car({
    brand:"Renault",
    model:"Scenic",
    year:2004
})
car2.save().then(res => console.log(res))
*/
const car3 = new Car({
    brand:"Peugeot",
    model:"308",
    year:2017
})
car3.save().then(res => console.log(res))