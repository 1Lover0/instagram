import express from 'express'
import mongoose from 'mongoose'

// app config 
const app = express();
const PORT = 5000;


// app db Connection




// server connection 
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})