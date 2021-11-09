const express = require('express'); //Line 1
const app = express(); //Line 2
const mongoose = require("mongoose");
const port = process.env.PORT || 5000; //Line 3

const url = "mongodb+srv://rami30080:r%40m%21Ay30090@cluster0.cyu3f.mongodb.net/test";

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


//r%40m%21Ay30090
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });



const Questions = mongoose.model('questions1', {
  survey_id:Number,
  upper_title:String,
  title: String,
  type:String,
});
const Options = mongoose.model('options', {
  survey_id:Number,
  op:String,
  type:String,
  question_id:String,
});

const Answer = mongoose.model('answer', {
  survey_id:Number,
  answer:String,
  question_id:String
});
// const ans=new Answers({
// })
//ans.save().then(() => console.log('meow2'));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/api/questions', async(req, res) => { //Line 9
  var result = [];
await Questions.find().exec(async function  (err, docs) {
console.log("Meow")
    await docs.map(async(item, index) => {

      result.push({"title": item.title, "id": item.id,"type": item.type,"options":item.options});

    })
    console.log(result)
    res.send({ success:true, error:null,info:result});
});
   //Line 10 
}); //Line 11


app.post('/api/answer', (req, res) => {
   const  {answers}  = req.body;
   const ans=new Answers({
    ans1:answers[0],
    ans2:answers[1],
    ans3:answers[2],
    ans4:answers[3],
    ans5:answers[4],
    ans6:answers[5],
    ans7:answers[6],
    ans8:answers[7],
    ans9:answers[8],
    ans10:answers[9],
    ans11:answers[10],
    ans12:answers[11],
    ans13:answers[12],
    ans14:answers[13],
    ans15:answers[14],
    ans16:answers[15],
    ans17:answers[16],
    ans18:answers[17],
    ans19:answers[18],
    ans20:answers[19],
  })
  ans.save().then(() => res.send({ success:true, error:null,info:null}));
});
