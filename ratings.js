
var ratings= [0,0,0,0,0]
var total=0
var totalratings=0
function addrating(rating){
	var location=rating-1
	ratings [location]=ratings [location]+1; //Change rating
	
	//Change in page
	var number =document.getElementById(rating.toString());
	number.innerHTML=ratings[location];

	//Change, Calculate, and Display average
	totalratings=totalratings+1;
	total=total+rating;
	var average=total/totalratings;
	var averageratings=document.getElementById("averageratings");
	averageratings.innerHTML=average.toFixed(2).toString()+" average out of "+totalratings.toString()+ " ratings";

	//Change stars
	var star=0;
	while (star<5){
		if(star<rating){
			document.getElementById("star"+star.toString()).src="star.png";

		}else{
			document.getElementById("star"+star.toString()).src="emptystar.png";

		}star=star+1;
		var bars=document.getElementsByClassName("bar-"+star.toString())
		bars[0].style.width=(ratings[star-1]/totalratings*100).toString()+"%"
	}

}