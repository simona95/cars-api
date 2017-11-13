var mongoose = require('mongoose');
var {Car} = require('./../models/car.js');

Car.remove({},(res)=>{
   console.log("Removed all cars...");
});

console.log("Creating new cars:\n");

//--------------------------------------------------------------------------------------------------
new Car({
    name: "Regera",
    brand: "Koenigsegg",
    hp: 1500,
    image: "/public/images/cars/regera.jpg",
    cost_per_day: 20000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Veyron",
    brand: "Bugatti",
    hp: 1200,
    image: "/public/images/cars/veyron.jpg",
    cost_per_day: 15000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Veneno",
    brand: "Lamborghini",
    hp: 740,
    image: "/public/images/cars/veneno.jpg",
    cost_per_day: 10000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Chiron",
    brand: "Bugatti",
    hp: 1500,
    image: "/public/images/cars/chiron.jpg",
    cost_per_day: 18000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Trevita",
    brand: "Koenigsegg",
    hp: 1004,
    image: "/public/images/cars/trevita.jpg",
    cost_per_day: 14000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "LaFerrari",
    brand: "Ferrari",
    hp: 1000,
    image: "/public/images/cars/laferrari.jpg",
    cost_per_day: 12000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Sesto Elemento",
    brand: "Lamborghini",
    hp: 570,
    image: "/public/images/cars/sesto_elemento.jpg",
    cost_per_day: 8000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Sesto Elemento",
    brand: "Lamborghini",
    hp: 570,
    image: "/public/images/cars/sesto_elemento.jpg",
    cost_per_day: 8000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "One",
    brand: "Koenigsegg",
    hp: 1340,
    image: "/public/images/cars/one.jpg",
    cost_per_day: 19000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
name: "Pininfarina Sergio",
    brand: "Ferrari",
    hp: 562,
    image: "/public/images/cars/pininfarina_sergio.jpg",
    cost_per_day: 17000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Enzo",
    brand: "Ferrari",
    hp: 650,
    image: "/public/images/cars/enzo.jpg",
    cost_per_day: 9000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Aventador",
    brand: "Lamborghini",
    hp: 750,
    image: "/public/images/cars/aventador.jpg",
    cost_per_day: 10500,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Gallarado",
    brand: "Lamborghini",
    hp: 513,
    image: "/public/images/cars/gallardo.jpg",
    cost_per_day: 7500,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "F430",
    brand: "Ferrari",
    hp: 503,
    image: "/public/images/cars/f430.jpg",
    cost_per_day: 8500,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Italia",
    brand: "Ferrari",
    hp: 597,
    image: "/public/images/cars/italia.jpg",
    cost_per_day: 13000,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});
//---------------------------------------------------------------------------------------------------
new Car({
    name: "Evoluzione",
    brand: "Ferrari",
    hp: 660,
    image: "/public/images/cars/evoluzione.jpg",
    cost_per_day: 12500,
    reserved: []
}).save((err, doc)=>{
    console.log("Car with id: "+doc._id+" saved!");
});