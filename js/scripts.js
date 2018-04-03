//business logic

// movieName='m', price = 10, age="teen", time=0
function Movie(movieName, price, age, time) { //constructor
  this.movieName = movieName;
  this.price = price;
  this.age = age;
  this.time = time;
}

Movie.prototype.calculatePrice = function() {// this method belongs to the constructor so you dont need to pass the perameters through this method/function
  if (this.age === "13-17") {
    this.price -= 2;
  } else if (this.age === "55+") {
    this.price -= 5;
  }

  if (this.time === "7:30 PM" || this.time === "8:00 PM") {
    this.price +=2;
  }
  return this.price;
}

// Movie.prototype.calculateTimePrice = function() {
//   if (this.time === "lateTime") {
//     this.price +=2;
//   }
//   return this.price;
// };

// var m = new Movie();
// var agePrice = m.calculateAgePrice();
// alert(m.calculateTimePrice());


// frontend logic
$(document).ready(function(){
  $("#movie-form").submit(function(event){
    event.preventDefault();

  var movieChoice = $("#movie").val();
  var movieTime = $("input:radio[name=time]:checked").val();
  var movieAge = $("#age").val();
  var movieDate = $("#date").val();

  var newMovie = new Movie(movieChoice, 10, movieAge, movieTime);

  // $("#user-output").show();
  var agePrice = newMovie.calculatePrice();
  var output = `<p class='lead outputDisplay'> Movie Choice: ${movieChoice}</p>
                <p class='lead outputDisplay'> Movie Time: ${movieTime}</p>
                <p class='lead outputDisplay'> Your Age: ${movieAge}</p>
                <p class='lead outputDisplay'> Movie Date: ${movieDate}</p>
                <p class='lead outputDisplay'> Movie Price: $ ${agePrice}</p>
                `;
  $("#user-output").append(output);
  $("#user-output").fadeIn("slow"); //dont need a .show if you're using fadeIn
  // $("#user-output").append("$" + agePrice);

  });
});
