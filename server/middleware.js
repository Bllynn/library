module.exports = {
  byId: userID => {
    return function(req, res, next) {
      if (!req.session.user && process.env.NODE_ENV) {
        req.session.user = userID;
      }
      next();
    };
  },
  checkUserName: (req, res, next) => {
    let badwords = ["doodoo", "poop", "butt", "ass", "brandon"];
    console.log(req.body.Username);
    while (badwords.find(word => req.body.Username.includes(word))) {
      const newUserName = badwords.find(word =>
        req.body.Username.includes(word)
      );
      req.body.Username = newUserName
        .split("")
        .reverse()
        .join("");
      console.log(req.body.Username);
    }
    next();
  }
};
