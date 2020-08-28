const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const { createToken, verifyPassword } = require('./util')


router.get("/", async (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => res.json("error from res", error));
});
 

router.post('/', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({
        email
      }).lean();
  
      if (!user) {
        return res.status(403).json({
          message: 'Wrong email or password.'
        });
      }
  
      const passwordValid = await verifyPassword(
        password,
        user.password
      );
  
      if (passwordValid) {
        const token = createToken(user);
  
        res.cookie('token', token, {
          httpOnly: true
        })
  
        res.json({
          email : user.email,
          firstName : user.firstName,
          message: 'Authentication successful!',
        });
      } else {
        res.status(403).json({
          message: 'Wrong email or password.'
        });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(400)
        .json({ message: 'Something went wrong.'});
    }
});


module.exports = router;