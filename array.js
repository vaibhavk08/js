var subject= ["Maths", "physics", "chemistry"];
var marks= new Array();
var num1;
for( var j=0; j<subject.length; j++){
  num1= parseFloat(prompt("enter mark for the subject" + subject[j] ));
  marks[j]=num1;

}
for (m in marks){
  console.log("marks for"+ subject[j] +":"+ marks[m]);
}
