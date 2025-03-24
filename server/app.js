const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');



app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());

// Database
mongoose.connect(process.env.CONNECTION_STRING_LOCAL)
    .then(() => {
        console.log('Database connecton is ready...');


        // Routes


        const categoryRoutes = require('./routes/categories')
        const productRoutes = require('./routes/Products');

        app.use(`/api/category`, categoryRoutes);
        app.use(`/api/products`, productRoutes);


        // Server 
        app.listen(process.env.PORT, () => {
            console.log(`server is running https://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

   








