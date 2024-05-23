import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 2005;

app.use(express.static("public"));
app.use(bodyparser.urlencoded ({extended: true}));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/create", (req, res)=>{
    res.render("post.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});


app.post("/button", (req, res) =>{
    const thePost = req.body["post"];
    res.render("send.ejs", {show: thePost});
});



app.listen(port, ()=>{
    console.log(`Running on port ${port}.`)
});