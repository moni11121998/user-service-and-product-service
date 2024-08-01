const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

mongoose.connect('mongodb+srv://test123:11121998@atlascluster.s8edkac.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log(" User DB connected Sucessfully")
});

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${5000}`));
