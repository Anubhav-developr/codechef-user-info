
var inpuu;



function store(event) {
    inpuu = event.target.value;
    console.log(inpuu);
    
   }



function submitButtonClick(event) {
    event.preventDefault();
   inpuu = document.getElementById("innu").value;
   console.log(inpuu);
   
         location.href = `https://codechef.com/users/${inpuu}`;
    //other stuff you want to do instead...
} 




