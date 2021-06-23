const express = require('express')
const Partenaire = require('../../models/Partenaire')

//require router from express
const router = express.Router()

//require bcrypt

const bcrypt=require('bcrypt')

//require json web token

const jwt = require('jsonwebtoken')

const {validator,registerPartenaireRules,loginRules} = require('../../middlewares/validator')


//route post api/partenaire/register
// register new partenaire
// accces public
router.post('/register',registerPartenaireRules(),validator,async(req,res)=>{
    const {name , lastName,email,password,categorie,address,tel}=req.body
    try {
        //simple validation
        // if(!name ||!lastName||!email||!password||!categorie||!address||!tel){
        //     return res.status(400).json({msg:'please enter all fields'})
        // }
        //check for existing user
        let partenaire=await Partenaire.findOne({email })
        if (partenaire) {
            return res.status(400).json({msg:'partenaire already exist'})

        }

        //create user
        partenaire = new Partenaire({name , lastName,email,password,categorie,address,tel})
        
          // Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    // Replace user password with hashed password
    partenaire.password = hashedPassword;
        //save user
        await partenaire.save()

         // sign partenaire
    const payload = {
        id: partenaire._id,
      };
  
      // Generate token
      const token = await jwt.sign(payload, process.env.secretOrKey);

        res.status(200).send({msg:'partenaire registred',partenaire})
        
    } catch (error) {
        res.status(500).send({msg:'error'})
        
    }


})

//route post api/partenaire/login
// login partenaire
// accces public
router.post('/login',loginRules(),validator, async (req,res)=>{
    const {email,password}=req.body
    try {
        //simple validation
        if (!email || !password) {
            return res.status(400).json({msg:'please enter all fields'})

        }

        //check for existing partenaire
        let partenaire=await Partenaire.findOne({email})
        if (!partenaire) {
            res.status(400).json({msg:'bad credentials'})
        }
        // check password
        const isMatch= await bcrypt.compare(password,partenaire.password)
        if (!isMatch){
            return res.status(400).json({msg:'bad credentials'})
        }

        res.send({msg:'partenaire logged in', partenaire})
    } catch (error) {
        res.status(500).json({msg:'server error'})
    }
})
module.exports = router