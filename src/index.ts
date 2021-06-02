import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import blogRoutes from './routes/blog.routes';

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/msit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => console.log("DB connected 👍")).catch((error) => {
    console.log('error occured', error);
});

app.use("/blog", blogRoutes);
app.use("/user", userRoutes);


app.listen(5000, () => {
    console.log('server started on port 5000');
})