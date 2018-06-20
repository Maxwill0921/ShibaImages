var previous = document.querySelector("#button-previous");
var next = document.querySelector("#button-next");
var myImage = document.querySelector("img");
var ImageNumber = 1;
var mySrc = "Images/Shiba";

 previous.onclick = function()
{
	if (ImageNumber-1 >=1) 
	{
		ImageNumber--
	    myImage.src=mySrc+ImageNumber+".jpg";

    }
    else
    {
    	alert("沒有上一張柴了，這是第一張柴");
    }
}
 next.onclick = function()
{
	if (ImageNumber+1 <=400) 
	{
		ImageNumber++
	    myImage.src=mySrc+ImageNumber+".jpg";

    }
    else
    {
    	alert("沒有下一張柴了，這是最後一張柴");
    }
}