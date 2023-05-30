import { ObjectId, client } from "../db.js";


export function getAllStudents(req){
    return client
    .db("b45WD")
    .collection("students")
    .find(req.query)
    .toArray();
}
export function getStudentsById(id){
        return client
        .db("b45WD")
        .collection("students")
        .findOne({_id: new ObjectId(id)})
    }

export function addStudentsData(data){
        return client
        .db("b45WD")
        .collection("students")
        .insertOne(data)
      }

export function updateStudentData(id, updatedData){
        return client
        .db("b45WD")
        .collection("students")
        .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedData})
    }      

export function deleteStudentsData(id){
        return client
      .db("b45WD")
      .collection("students")
      .deleteOne({_id: new ObjectId(id)})
    }
 
 