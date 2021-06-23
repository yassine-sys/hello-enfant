const {body, validationResult} = require('express-validator')
const registerRules=()=>[
    body('name','name is required').notEmpty(),
    body('lastName','last name is required').notEmpty(),
    body('email',' email is required').isEmail(),
    body('password','password is required').notEmpty()

]
const loginRules=()=>[
    body('email','this is not email ').isEmail(),
    body('password','password is required').notEmpty()

]

const registerPartenaireRules=()=>[
    body('name','name is required').notEmpty(),
    body('categorie','categorie is required').notEmpty(),
    body('email',' email is required').isEmail(),
    body('password','password is required').notEmpty(),
    body('address','address is required').notEmpty(),
    body('tel','tel is required').notEmpty(),


]



const validator = (req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({
            errors: errors.array().map((el)=>({
                msg:el.msg
            }))
        })
    }
    next()
}
module.exports={registerRules,loginRules,validator,registerPartenaireRules}