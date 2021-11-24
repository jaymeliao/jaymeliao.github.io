const fs = require("fs")


var dataString=''
const newPerson = {
    "name": "Lucas",
    "age":11
}

fs.readFile('./data.json','utf-8',function(err, jsonString){
  if (err){
    console.log(err);
  }else{

      var data = JSON.parse(jsonString);
     // console.log(data["member"][1]["age"])
     // console.log(data["xyz"])
      //console.log(data["name"])
      data["member"].push(newPerson);
      dataString=JSON.stringify(data);
      console.log(data)
      //console.log(data["member"][2]["name"])

      fs.writeFileSync("./data.json",dataString, function(err){
        if (err){
          console.log(err);
        }else{
          console.log("successed");
        }
      })


  }
});

//=================================================


/*
fs.writeFileSync("./data.json",dataString, function(err){
  if (err){
    console.log(err);
  }else{
    console.log("successed");
  }
})
*/
