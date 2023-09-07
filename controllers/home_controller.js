module.exports.home = function(req,res){
    // return res.end('<h1>Home controller for SocialApp</h1>')

    return res.render('home',{
        title: "home"
    })
};

module.exports.profiles = function(req,res){
    return res.end('<h1>Profiles page has been redirected</h1>')
};