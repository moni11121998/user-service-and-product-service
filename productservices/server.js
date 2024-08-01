const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

mongoose.connect('mongodb+srv://test123:11121998@atlascluster.s8edkac.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log(" product DB connected Sucessfully")
});

app.use(express.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
