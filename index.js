import express from "express";
import { configDotenv } from "dotenv";
import axios from "axios";

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));

const config = {
     headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + process.env.MOVIE_DB_ACCESS_TOKEN
     }
};

app.get('/', async (req, res) => {
     try{
          const request = await axios.get(API_URL, config);
          const response = request.data;
          res.render("index.ejs");
     }catch(error){
          console.log(error);
     }
});

app.listen(PORT, () => {
     console.log("server is running on port: " + PORT);
});