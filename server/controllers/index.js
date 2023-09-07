const { User, Event } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const axios = require("axios");

class UserController {
  static async register(req, res, next) {
    try {
      let { username, fullname, password } = req.body;
      console.log(req.body);
      let role = "user";
      let user = await User.create({
        username,
        fullname,
        password,
        role,
      });
      res
        .status(201)
        .json({
          username: user.username,
          fullname: user.fullname,
          role: user.role,
        });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { username, password } = req.body;
      let user = await User.findOne({ where: { username } });

      if (!username || !password) {
        throw { name: "EmailOrPasswordRequired" };
      }

      if (!user) {
        throw { name: "InvalidCredentials" };
      }

      let isValid = await comparePassword(password, user.password);
      if (!isValid) {
        throw { name: "InvalidCredentials" };
      }
      let payload = {
        id: user.id,
        username: user.username,
        fullname: user.fullname,
        role: user.role,
      };
      let token = generateToken(payload);
      res.status(200).json({
        access_token: token,
        username: user.username,
        role: user.role,
        userId: user.id,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
