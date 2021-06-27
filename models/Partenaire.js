// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the user schema
const partenaireSchema = new Schema({

  partenaire_name: {
    type: String,
    required: true,
  },
  responsable_name: {
    type: String,
    required: true,
  },
  responsable_lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
   
  },
  categorie: {
    type: String,
    required: true,
   
   
  },
  address: {
    type: String,
    required: true,
      
  },
  ville: {
    type: String,
    required: true,
      
  },
  tel: {
    type: String,
    required: true,
   
   
  },
  rate:{
    type:Number,
    default:0,
  },
  image:{
    type:[String]
  },
 
  role: {
    type: String,
    required: true,
    enum:["partenaire"],
    default:"partenaire",
  },
});

module.exports = Partenaire = mongoose.model('Partenaire', partenaireSchema);