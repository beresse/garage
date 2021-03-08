const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/garage', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("All clear Houston")
})

const carsSchema = new mongoose.Schema({
    // _id: Number,
    brand: String,
    model: String,
    year: Number,
    created: Date
})

const carModel = mongoose.model("cars", carsSchema);
// carModel.deleteMany({}).
//     then(() => {
//         carModel.create([{
//             //_id: 1,
//             brand: "Renault",
//             model: "Espace",
//             year: "1999"
//         }, {
//             //_id: 3,

//             brand: "Renault",
//             model: "Scenic",
//             year: "2004"
//         }, {
//             //_id: 308,
//             brand: "Peugeot",
//             model: "308",
//             year: "2017"
//         }
//         ])
//     })

// carModel.findById({
//     _id: "604645a6b3b80e7af830c16d"
// }).then((response) => console.log(response));

// carModel.updateOne({ model: "Espace" }, {
//     year : "2000"
// }

// ).then((response) => console.log(response));

carModel.deleteMany({
    brand: "Renault",
}).then((response) => console.log(response));


// carModel.deleteMany({}).then(() => {
//     carModel.insertMany([{
//         brand: "Aston Martin",
//         model: "DB9",
//         year: "2010"
//     }, {
//         brand: "Porsche",
//         model: "904",
//         year: "1965"
//     },
//     {
//         brand: "Range",
//         model: "Discovery Sport",
//         year: "2017"
//     },

//     ])
// })


// carModel.find({
//     year: { $gt: 2015 }
// }).then(response => {
//     console.log( response)
// })

carModel.insertMany([{
    brand: "Aston Martin",
    model: "DB9",
    year: "2010"
}, {
    brand: "Porsche",
    model: "904",
    year: "1965"
},
{
    brand: "Range",
    model: "Discovery Sport",
    year: "2017"
},

])
carModel.find({
    model: /o/
}).then(response => {
    console.log(response)
})