import express from 'express';
import calcRoute from './routes';
const app = express();

app.use(express.json());

app.use( "/calc" , calcRoute);
app.listen(5000 , () => {
    console.log('server started on port 5000');
})