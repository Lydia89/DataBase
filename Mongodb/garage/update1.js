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

Car.updateOne({year:1999},{$push:{year:2000}},{_id:"5faa9ddebaf4880bc648226e"},function(res,err){
    if(err){
console.log('err')
    }else{
        console.log('res',res)
    }
})

   
    
 


//Car.where({ _id:"5faa9ddebaf4880bc648226e"  }).update({ year: 1999 })

// becomes

//Car.where({ _id: "5faa9ddebaf4880bc648226e" }).update({ $set: { year: 2000 }})
//console.log('Car',Car)