import { client } from "../db.js";
import Jwt from "jsonwebtoken";

export function addUsers(userInfo){
    return client
    .db("b45WD")
    .collection("users")
    .insertOne(userInfo)
}

export function getUser(userEmail){
    return client
    .db("b45WD")
    .collection("users")
    .findOne({email:userEmail})
}

export function generateJwtToken(id){
    return Jwt.sign({id},process.env.SECRETKEY,{expiresIn:"30d"})
}
