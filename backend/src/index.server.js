const express = require("express");
const env = require("dotenv");
const mongoose = require('mongoose');
const app = express();

//routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category');

//environmental variables or constants
env.config();
/*mongodb+srv://root:<password>@cluster0.5v3zr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority */
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.5v3zr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
     {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true
     }
                ).then(()=> {
                    console.log('Database Connected');
                });


//middleware
app.use(express.json());
app.use('/api',authRoutes)
app.use('/api',adminRoutes)
app.use('/api',categoryRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});