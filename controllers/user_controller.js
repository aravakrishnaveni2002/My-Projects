
const User = require('../models/user');

module.exports.user = function(request,response){

    // return response.send('<h1>User Profile</h1>');

    //getting a cookie
    // console.log(request.cookies);

    //changing a cookie
    // response.cookie('user_id',24);
    return response.render('user',{
        title: 'User'
    })
}

module.exports.signup = function(request,response){
    return response.render('signup',{
        title: "Codeial | Sing Up"
    });   
}

module.exports.signin = function(request,response){
    return response.render('signin',{
        title: "Codeial | Sing In"
    });   
}

module.exports.create = function(request,response){

    if(request.body.password != request.body.confrim_password){
        return response.redirect('back');
    }

    User.findOne({email: request.body.email},function(err,user){
        if(err){
            console.log("Error in finding the user sigging up");
            return;
        }

        if(!user){
            User.create(request.body,function(err,user){
                if(err){
                    console.log("Error in creating the user sigging up");
                    return;
                }

                return response.redirect('/user/sign-in');
            });
        }

        else{
            return response.redirect('back');
        }
    });

}

module.exports.createSession = function(request,response){


}