import express from "express"
import { addStudentsData, getAllStudents, getStudentsById, updateStudentData,deleteStudentsData} from "../Controllers/students.js";

const router=express.Router();
router.get("/all",async (req,res)=>{
    try {
       

        if(req.query.experience){
            req.query.experience= +req.query.experience;
        }
        if(req.query.taskCompletion){
            req.query.taskCompletion= +req.query.taskCompletion;
        }
        const students=await getAllStudents(req)
        if(students.length<=0){
            res.status(400).json({data:"User not found"})
        }
        return res.status(200).json({data:students})
       } 
       catch (error) {
        console.log(error)
        res.status(500).json({data:"Internal server error"})
       }
    
})

router.get("/:id",async(req,res)=>{
    try {
       
        const{id}=req.params;
        const students=await getStudentsById(id);
        if(!students){
            res.status(400).json({data:"User not Found"})
            return  
        }
        res.status(200).json({data:students})
    } catch (error) {
        res.status(500).json({data:"Internal Server Error"})
    }
})

router.post("/add",async(req,res)=>{
    try {
       const newStudent=req.body;
       if(!newStudent){
        res.status(400).json({data:"No details provided"})
            return
       } 
       const result=await addStudentsData(newStudent);
       res.status(200).json({data:{result:result,message:"Added successfully"}})
    } catch (error) {
        res.status(500).json({data:"Internal Server Error"})
    }
})

router.put("/edit/:id",async(req,res)=>{
    try {
        const{id}=req.params;
        const updatedData=req.body;
        if(!id || !updatedData)
{
    res.status(400).json({data:"Wrong Request"})
   
}     const result=await updateStudentData(id,updatedData)
res.status(200).json({data:{result:result,message:"Updated successfully"}})

    } catch (error) {
        console.log(error)
        res.status(500).json({data:"Internal Server Error"})

    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        const{id}=req.params;
        if(!id){
            return res.status(400).json({data:"Wrong Request"})
        }
    
        const result=await deleteStudentsData(id)
        res.status(200).json({data:{result:result,message:"Deleted successfully"}})

}catch (error) {
        console.log(error)
        res.status(500).json({data:"Internal Server Error"})
    }
})

export const studentsRouter=router