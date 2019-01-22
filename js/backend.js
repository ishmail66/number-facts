// request data from a backend

// put simply, HTTP is a protocol which allows us to send information around the web. for example, when your browser askd for http://domain. HTTP requests come in different flavors, using different verbs(GET, PUT, AND DELETE are the four most common). The kind of request your browser makes

// AJAX stands for Asynchronous JavaScript and XML.

// two other intialisms you may see in this context are API and JSON

// API - Application programming interface
// JSON - javascript object notation


            function newQuote(input) {
                
                //the url we are making a request to
                // var url = "https://api.chucknorris.io/jokes/random?category=dev";
                var url = "http://numbersapi.com/"+input+"/math?callback=";


                $.ajax({
                    url: url,
                    method: 'get',
                    success: function (data) {
                        //do something when call is successful
                        console.log(data);
                        $('#quote').text(data.value);
                        $('#quote').text(data);

                        
                        $('#url').attr('href', data.url);
                        $('#icon').attr('src', data.icon_url);
                    },
                    error: function (error) {
                        console.log(error);
                        alert('incorect input');
                    }
                });
            }

            function useInput(randomNum){
                
                // var input = document.getElementById('input').value;
                newQuote(randomNum); 

                document.getElementById('quote').innerHTML = randomNum;

            }

  //Get a reference to the button
  var button = document.getElementById("generate");

  //Run the function on button click
  function generate() {

  // Create a variable to hold a random number between 1 and 100
  var randomNum = Math.floor((Math.random() * 9999) + 1);

  // Create a variable el to hold the ranNum element
  var el = document.getElementById('ranNum');
  // Write the number into that element
  el.innerHTML = randomNum;

  useInput(randomNum);
 }
