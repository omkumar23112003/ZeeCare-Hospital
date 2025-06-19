import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 3 Characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain At Least 3 Characters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide A Valid Email!"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
        maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    },
    aadhar:{
        type: String,
        required: true,
        minLength: [12, "Aadhar Number Must Contain Exact 12 Digits!"],
        maxLength: [12, "Aadhar Number Must Contain Exact 12 Digits!"],
    },
    dob:{
        type: Date,
        required: [true, "DOB is requrired!"],
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male","Female","Others"],
    },
    password:{
        type: String,
        minLength: [8, "Password Must Contain At Least 8 Characters!"],
        required: true,
        select: false,
    },
    role:{
        type: String,
        required: true,
        enum: ["Admin","Patient","Doctor"],
    },
    doctorDepartment: {
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String,
    },
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      return next();
    }
    
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
});


userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    })
}

export const User = mongoose.model("user", userSchema);