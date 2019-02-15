var code1=Math.floor(Math.random() * 9999);
//var code1=1234;
//document.write(code1);
var code = (""+code1).split("");
var colorArray=[ "#ff1a1a", "#ff3333", "#ff4d4d", "#ff6666", "#ff8080", "#ff9999", "#ffb3b3", "#ffcccc", "#ffe6e6", "#ffffff"];
var userIteration=1;
var cows,bulls;

cows=0;
bulls=0;
function getCows()
{   if(userIteration<10)
    {
        cows=0;
        bulls=0;
        var uinput=document.getElementById("uinp");
    
         var userInputArray= (""+uinput.value).split("");
         var count=0;
         var count1=0;

         if(userInputArray.length==4){
         
          for(var i=0;i<userInputArray.length;i++)
             {
             
             for(var j=0;j<userInputArray.length;j++)
             {
             
             if(userInputArray[i]==userInputArray[j])
             { 
             
             count1++;}
             } 
             }}
             if(count1>4){
             alert("please enter correct number");
             location.reload();
             }
if(code.length==4){

 for(var i=0;i<code.length;i++)
    {
    
    for(var j=0;j<code.length;j++)
    {
    
    if(code[i]==code[j])
    { 
    
    count++;}
    } 
    }}
	if(count>4){
	
	location.reload();
	}
        if (userInputArray[0] == code[0]){
        cows++;}
            if (userInputArray[1] == code[1]){
        cows++;}
    if (userInputArray[2] == code[2]){
        cows++;}
    if (userInputArray[3] == code[3]){
        cows++;}
        
    for(var i=0;i<userInputArray.length;i++)
    {
    for(var j=0;j<userInputArray.length;j++)
    {
    if(userInputArray[i]==code[j])
        { 
    bulls++;
        }
    } 
    } 
    
    
    var result =document.getElementById("result");
    
    // for(var i=0;i<codeArray.length;i++)
    // {
    //     document.writeln((i+1) + ": " + colorArray[i]);
    // }
    if(cows==4 && bulls==4)
    {
        alert("Wow! You Did It");
    }
    else
    {
    result.innerHTML+="<span style='height:10px;color:"+colorArray[userIteration]+"'> chance= "+userIteration+" : Cows = "+cows+" Bulls = "+bulls+"</span><br/>";
    }
    userIteration++;
    
    }
 
        else{
    alert("You loose the game..... You will be redriecting to new game");
    location.reload();}
}



