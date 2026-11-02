// const express = require("express");
// const PORT = process.env.PORT || 3000;

// const app = express();

// app.use(express.json());


// app.get("/api/health", (req, res)=>{
//     res.status(200).json({
//         success: true,
//         message: "PR Mentor backend is running"    
//     })
// })

// app.post("/api/reviews", (req, res)=>{
//     const {title, description} = req.body;

//     if(
//         typeof title !== "string"||
//         title.trim() === "" ||
//         typeof description !== "string"
//     ){
//         res.status(400).json({
//             success: false,
//             message: "Valid title and description are required"
//         });
//     }
//     return res.status(201).json({
//         success:true,
//         message: "Review request recieves successfully",
//         data:{
//             title: title.trim(),
//             description
//         }
//     })
// })

// app.get("api/about", (req, res)=>{
//     res.status(200).json({
//         name: "PR Mentor",
//         version: "1.0.0",
//         description: "ai-powered github pull request reviewer"
//     })
// })

// app.get("api/users/:id", (req, res)=>{
//     const id = req.params;
//     res.status(200).json({
//         userId: id
//     })
// })

// app.get("api/search", (req, res)=>{
//     const {language} = req.query;
//     res.status(200).json({
//         language: language??null
//     })
// })

// app.post("api/feedback", (req, res)=>{
//     const {name, message} = req.body;
//     if(typeof name!=="string" || typeof message!=="string" || !name.trim() ||!message.trim()){
//         res.status(400).json({
//             success: false,
//             message: "Name and message must be non empty strings"
//         });
//     }
//     return res.status(201).json({
//         success: true,
//         message: "feedback recieved successfully",
//         feedback: {
//             name: name.trim(),
//             message: message.trim()
//         }
//     })
// })

// app.listen(PORT, ()=>{
//     console.log(`Server running on port ${PORT}`);
// })


//WE ARE REPLACING SERVER.JS WITH ONLY THE CODE REQUIRED TO START THE SERVER CUZ EARLIER IT WAS DOING EVERYTHING


require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db")

const PORT = process.env.PORT || 3000;

const startServer = async()=>{
  try{
    await connectDB();

    app.listen(PORT, ()=>{
      console.log(`PR Mentor running on port ${PORT}`);
    })
  }
  catch(error){
    console.error("Server startup failed");
    process.exit(1);
  }
}

startServer();
