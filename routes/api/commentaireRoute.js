const express = require('express')

const Commentaire=require('../../models/Commentaire')
const User=require('../../models/User')
//require router from express
const router = express.Router()

const {commentRules} = require('../../middlewares/validator')
const isAuth = require('../../middlewares/isAuth')


router.post('/add-comment',commentRules(),isAuth,async (req,res)=>{

    const {contenu , dateOfCreation}=req.body
    try {
      const  commentaire=new Commentaire({contenu , dateOfCreation,userId: req.user._id})
        await commentaire.save()
        // await user.findOne({ _id: req.user._id }).populate('commentaire.userId')
        //  user.commentaires=[...user.commentaires,commentaire._id]
        //  await user.save()
        
        res.status(200).send({msg:'comment added',commentaire})
    } catch (error) {
        res.status(500).send({msg:'error'})

        
    }

})

module.exports = router