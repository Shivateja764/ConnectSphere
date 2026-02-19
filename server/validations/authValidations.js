const {body,param,query}=require('express-validator')

exports.registerValidationsChecks=[
    body("name").exists()
    .withMessage ('name field is missing')
    .isAlphanumeric("en-US",{ignore:" "})
    .withMessage(
        "special characters are not allowed. only a-z ,A-Z,0-9 are allowed"
    )
    .isLength({min:3,max:50})
    .withMessage(
        'please enter name should have minimum 3 charcters and maximum 50 charcters are allowed',
    ),
    body('email').exists()
    .withMessage('email field is misssing')
    .isEmail().withMessage("please enter proper mail"),
    body('password').exists( )
    .withMessage("password field is missing")
    .isStrongPassword().withMessage("at least 8 characters ,one lowercase,one Uppercase,one number,and one symbol is required")
]