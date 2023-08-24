const mongoose = require('mongoose');
// const { isModuleNamespaceObject } = require('util/types');
// const mongoURI = "mongodb://localhost:27017/inotebook"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to mongo succesfully");
        
//     } )
// }

// module.exports = connectToMongo;

const server = '127.0.0.1:27017';
const database ='MadPharma';

const connectToMongo = async () => {
    try{ 
        mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb+srv://soyamali406:bVXLUqH6PcbH5iqo@cluster0.648cy9h.mongodb.net/`);
        console.log("connected to mongo succesfully");
    } catch (err){
        console.log('Failled connected to mongodb', err);
    }
};

module.exports = connectToMongo; 