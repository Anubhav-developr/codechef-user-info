
var inpuu;



function store(event) {
    inpuu = event.target.value;
    console.log(inpuu);
    
    
   }



function submitButtonClick(event) {
    event.preventDefault();
   inpuu = document.getElementById("innu").value;
   console.log(inpuu);
   if(inpuu){
         location.href = `https://codechef.com/users/${inpuu}`; }
         else {
             alert("Empty field");
         }
    //other stuff you want to do instead...
} 




