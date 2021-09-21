import express, { Response, Request, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import WilderRoutes from './routes/Wilders';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/wilders')
    .then(() => console.log('Mongo connected'));

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/wilders', WilderRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    if (error) {
        res.status(500).json({ error: true });
    } else {
        next();
    }
});

app.use((req: Request, res: Response) => {
    res.status(404).json({ notfound: true });
});

// start server
app.listen(3552, () => console.log("Server started on 3552"));