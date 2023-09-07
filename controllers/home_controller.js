module.exports.home = function(req,res){
    return res.end('<h1>Home controller for SocialApp</h1>')
};

module.exports.profiles = function(req,res){
    return res.end('<h1>Profiles page has been redirected</h1>')
};