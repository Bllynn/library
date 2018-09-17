module.exports = {
    byId: (userID) => {
        return function (req, res, next) {
            if(!req.session.user && process.env.NODE_ENV){
                req.session.user = userID
            }
            next();
        }
    }
}