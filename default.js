var number = ['Fizz','Buzz'];
var answer

var Decision = function(i)
{
  if(i % 3 === 0 && i % 5 === 0)
  {
    return number[0]+number[1];
  }  
  else if(i % 3 === 0)
  {
    return number[0];
  }
   else if(i % 5 === 0)
  {
    return number[1];
  }
   else 
  {
    return i;
  }
}


for(var i = 1; i < 101; i++)
{
  var li = document.createElement('li');
  
  li.textContent = i + '回目:' + Decision(i);

  document.getElementById('FizzBuzz').appendChild(li);
}


answer =parseInt(window.prompt('自然数を入れてね！'));

li= document.createElement('li');
  
li.textContent = answer + 'は:' + Decision(answer);
   
document.getElementById('form').appendChild(li);
