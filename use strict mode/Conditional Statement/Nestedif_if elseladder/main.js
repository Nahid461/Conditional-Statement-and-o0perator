//Nested if_if else ladder

let totalMarks =59.2;
let message;

totalMarks = Math.round(totalMarks);
console.log(totalMarks);


if ((totalMarks>=0) && (totalMarks<=100))
{
    //check pass or fail
    if(totalMarks<35)
    {
     message="fail";   
    }
    else{
        if((totalMarks<=35) &&(totalMarks>=50))
        {
          message="pass class";  
        }
        else
        if((totalMarks<=51) &&(totalMarks>=60))
        {
            message= "second class";
        }
        else
        if((totalMarks<=61) && (totalMarks>=74))
        {
            message= "first class";
        }
        else
        if((totalMarks<=75) && (totalMarks>=100))
        {
            message = "distinction";
        }
        
    }
  
}
else{
    message="the total mark must be between 0 to 100";
    console.log(message);
}

