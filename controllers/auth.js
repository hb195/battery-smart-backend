const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(400).json({ err });
    user.salt = undefined;
    user.hashed_password = undefined;
    res.status(200).json({ data: user });
  });
};

const signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(404)
        .json({ err: "The email does not exist. Please signup." });
    }
    //check for user and password match authenticate method in helper
    if (!user.authenticatePassword(password))
      return res
        .status(401)
        .json({ err: "Invalid email and password combination" });

    //return signed jwt token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    //persist token as 't' in cookie
    res.cookie("user", token, { expire: new Date() + 9999 });

    //send user to front end along with token
    user.salt = undefined;
    user.hashed_password = undefined;
    res.send({ token, user });
  });
};

module.exports = { signup, signin };
