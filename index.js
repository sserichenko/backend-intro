import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from "express-fileupload";

const PORT = 5000;

const DB_URL = `mongodb+srv://serega:!QAZ2wsx@cluster0.37ifw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({

}));
app.use('/api', router);

// 
// app.use('/users', usersRouter); Если бы мы работали еще и с пользователями, то создали бы для них отдельный роутер

// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.status(200).json("Server is really working now GET")
// })

// app.get("/", (req, res) => {
//     console.log(req.query);
//     console.log(req.query.message);
//     res.status(200).json("Server is really working now POST")
// })

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server working on port - ${PORT}`));
  } catch (error) {
    console.log('error', error);
  }
}
startApp();
