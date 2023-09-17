const express =require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

// app.use((req, res, next) =>{
//     console.log("HTTP Method - " + " , URL - " + req.url);
//     next();
// });

app.use("/users", userRouter);
app.use("/note", noteRouter);



app.get("/",(req, res) =>{
    res.send("Notes API from soham");
});

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://admin:admin@cluster0.wlxjijc.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on the port no. " + PORT);
    });
})
.catch(()=>{
    console.log("error");
})
