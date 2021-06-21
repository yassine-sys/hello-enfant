const express = require('express')
const Partenaire = require('../../models/Partenaire')

//require router from express
const router = express.Router()

//route post api/partenaire/register
// register new partenaire
// accces public
router.post('/register',async(req,res)=>{
    const {name , lastName,email,password,categorie,address,tel}=req.body
    try {
        //simple validation
        if(!name ||!lastName||!email||!password||!categorie||!address||!tel){
            return res.status(400).json({msg:'please enter all fields'})
        }
        //check for existing user
        let partenaire=await Partenaire.findOne({email })
        if (partenaire) {
            return res.status(400).json({msg:'partenaire already exist'})

        }

        //create user
        partenaire = new Partenaire({name , lastName,email,password,categorie,address,tel})
        
        //save user
        await partenaire.save()

        res.status(200).send({msg:'partenaire registred',partenaire})
        
    } catch (error) {
        res.status(500).send({msg:'error'})
        
    }


})
module.exports = router