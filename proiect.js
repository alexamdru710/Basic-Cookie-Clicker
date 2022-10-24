var clicks = 0;
var audio = new Audio('./media/prize.mp3');
function onClick() 
{
  clicks += 1;
  if (clicks%100==0 && clicks!=0) 
	{
		audio.play();
	}
  
  document.getElementById("clicks").innerHTML = clicks;
};