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



const Questions = mongoose.model('questions', {
  title: String,
  id:Number,
  type:String,
  options:{
    op1: String,
    op2: String,
    op3: String,
    op4: String,
    op5: String,
    op6: String,
    op7: String,
    op8: String,
    op9: String,
    op10: String}
});
const Answers = mongoose.model('answers', {
  ans1:String,
  ans2:String,
  ans3:String,
  ans4:String,
  ans5:String,
  ans6:String,
  ans7:String,
  ans8:String,
  ans9:String,
  ans10:String,
  ans11:String,
  ans12:String,
  ans13:String,
  ans14:String,
  ans15:String,
  ans16:String,
  ans17:String,
  ans18:String,
  ans19:String,
  ans20:String
});
const ans=new Answers({
  ans1:'1',
  ans2:'2',
  ans3:'1',
  ans4:'1',
  ans5:'2',
  ans6:'3',
  ans7:'3',
  ans8:'1',
  ans9:'2',
  ans10:'1',
  ans11:'2',
  ans12:'1',
  ans13:'1',
  ans14:'2',
  ans15:'1',
  ans16:'3',
  ans17:'1',
  ans18:'2',
  ans19:'1',
  ans20:'3',
})
//ans.save().then(() => console.log('meow2'));

// const salah =new Questions(
//   {
//     title: "المستوى التعليمي:",
//   id:23,
//   type:"a",
//   options:{
//     op1: "حتى ثانوي جزئي",
//     op2: "ثانوي كامل",
//     op3: "فوق ثانوي غير اكاديمي",
//     op4: null,
//     op5: null,
//     op6: null,
//     op7: null,
//     op8: null,
//     op9: null,
//     op10: null
//   }
//   });
//   salah.save().then(() => console.log('meow2'));
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
