const session = require('express-session');
const {check, validationResult} = require('express-validator');

//login controllers
exports.getLogin = (req, res, next) => {
    res.render('auth/login.ejs', {
        activePath: "/login",
        isLoggedIn: false
    });
}
exports.getLoginPOST = (req, res, next) => {
    console.log(req.body);
    // res.cookie("isLoggedIn", "true");  //cookie
    req.session.isLoggedIn = true;  //session
    res.redirect('/');
}

//logout controller
exports.logoutPOST = (req, res, next) => {
    // res.clearCookie("isLoggedIn");  //clear cookie
    // res.cookie("isLoggedIn", false);   //setting isLoggedIn-cookie as false

    //it will destroy session form database
    req.session.destroy(() => {
        res.redirect('/login');
    })
    console.log("Now, you are logged out.");
}

//signup controllers
exports.getSignup = (req, res, next) => {
    res.render("auth/signup.ejs", {
        activePath: "/signup",
        isLoggedIn: false,
        errorMessages: [],
        oldInput: {
            firstName: '',
            lastName: '',
            signupEmail: '',
            signupPassword: '',
            userType: ''
        }
    });
}
exports.signupPOST = [
    // firstName validations
    check("firstName")
        .notEmpty().withMessage("First name is required")
        .trim()
        .isLength({ min: 2 }).withMessage("First name at least 2 character long")
        .matches(/^[a-zA-Z\s]+$/).withMessage("First name can only contain letters"),

    // lastName validations
    check("firstName")
        .matches(/^[a-zA-Z\s]*$/).withMessage("Last name can only contain letters"),

    // email validations
    check("signupEmail")
        .isEmail().withMessage("Please enter valid email")
        .normalizeEmail(),

    // signupPassword validations
    check("signupPassword")
        .isLength({ min: 8 }).withMessage("Password at least 8 character long")
        .matches(/[a-z]/).withMessage("Password must contain at least one lower case letter")
        .matches(/[A-Z]/).withMessage("Password must contain at least one upper case letter")
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("Password must contain at least one special character")
        .trim(),

    // confirmPassword validations
    check("confirmPassword")
        .trim()
        .custom((value, {req}) => {
            if(value !== req.body.signupPassword) {
                throw new Error("Password do not match");
            }
            return true;
        }),

    // userType validations
    check("userType")
        .notEmpty().withMessage("User type is required")
        .isIn(["guest", "host"]).withMessage("Invalid user type"),

    // termsAccepted validations
    check("termsAccepted")
        .notEmpty().withMessage("You must accept the term and condition before proceed")
        .custom((value) => {
            if(value !== 'on') {
                throw new Error("You must accept the term and condition before proceed")
            }
            return true;
        }),

    
    
    
    //final Handler
    (req, res, next) => {
        const { firstName, lastName, signupEmail, signupPassword, userType } = req.body;
        const errors = validationResult(req);

        //if errors found
        if(!errors.isEmpty()) {
            return res.status(422).render("auth/signup", {
                activePath: '/signup',
                pageTitle: "Signup",
                isLoggedIn: false,
                errorMessages: errors.array().map(error => error.msg),
                oldInput: {
                    firstName,
                    lastName,
                    signupEmail,
                    signupPassword,
                    userType
                }
            });
        }
        res.redirect('/login');
    }
]