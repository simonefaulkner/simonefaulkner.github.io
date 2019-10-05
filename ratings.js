
var ratings= [0,0,0,0,0]
var total=0
var totalratings=0
function addrating(rating){
	var location=rating-1
	ratings [location]=ratings [location]+1;
	var number =document.getElementById(rating.toString());
	number.innerHTML=ratings[location];
	totalratings=totalratings+1;
	total=total+rating;
	var average=total/totalratings;
	var averageratings=document.getElementById("averageratings");
	averageratings.innerhtml=average.toString()+" average out of "+total.toString()+ "ratings"
}