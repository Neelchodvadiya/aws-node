"use strict";

require("dotenv").config({ path: "./variables.env" });
const connectToDatabase = require("./db/conn");
const User = require("./models/user");


module.exports.CreateUser = async (event, context, callback) => {
  try {
    connectToDatabase();
    console.log(event);
    const userdata = await User.create(event);

    const datas = await userdata.save();

    return {
      statusCode: 200,
      body: JSON.stringify(datas),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: err.message || "Could destroy fetch the User.",
    };
  }
};

module.exports.getOne = async (event, context, callback) => {
  try {
    connectToDatabase();

    const data = await User.findById({ _id: event.id });
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: err.message || "Could destroy fetch the User.",
    };
  }
};

module.exports.getAll = async (event, context, callback) => {
  try {
    connectToDatabase();
    const data = await User.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: err.message || "Could destroy fetch the User.",
    };
  }
};

module.exports.update = async (event, context, callback) => {
  try {
    connectToDatabase();

    const data = await User.findByIdAndUpdate(event.id,event,{
      new: true,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: err.message || "Could destroy fetch the User.",
    };
  }
};

module.exports.delete = async (event, context, callback) => {
  try {
    connectToDatabase();

    const data = await User.findByIdAndDelete(event.id,{
      new: true,
    });

    return {
      statusCode: 200,
      body: "record deleted",
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: err.message || "Could destroy fetch the User.",
    };
  }
};
