

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

/* 1er methode 
Car.findById("5faa9ddebaf4880bc648226e", function (err, docs){
    if (err){ 
        console.log(err); 
    } 
    else{ 
        console.log("result : ", docs); 
    } 
})
*/
/**le resultat dans la console
 * result :  { _id: 5faa9ddebaf4880bc648226e,
  brand: 'Renault',
  model: 'Espace',
  year: 1999,
  created: 2020-11-10T14:04:14.982Z,
  __v: 0 }
 
 */




// 2 eme methode avec mode await

async function CarAsync(){
    
try {

    const result = await Car.findById("5fab007baa39ce3b5fc9bf15").exec()
        console.log(result)
       // return Promise.resolve(result)
    } catch (err) {
        console.log(err)
        //return Promise.reject(err)
     }
}console.log(CarAsync())