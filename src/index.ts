import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import blogRoutes from './routes/blog.routes';
import authRoutes from './routes/auth.routes';
import * as dotenv from 'dotenv';
import config from './config';

dotenv.config();

const app = express();
app.use(express.json());


mongoose.connect( config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex : true
}).then(() => console.log("DB connected 👍")).catch((error) => {
    console.log('error occured', error);
});

app.use("/blog", blogRoutes);
app.use("/user", userRoutes);
app.use('/auth' , authRoutes);


app.listen(config.port, () => {
    console.log(`server started on port ${config.port} 😃`);
})