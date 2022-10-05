function show_rating(rating)
{
 document.getElementById("rating_value").innerHTML= rating;
}

  // popup js 

  const loginPopup = document.querySelector(".login-popup");


  window.addEventListener("load",function(){
 
   showPopup();
  //  setTimeout(function(){
  //    loginPopup.classList.add("show");
  //  },5000)

  })

  function showPopup(){
        const timeLimit = 5 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
           document.body.style.overflow='hidden';
         } 
        },1000);
  }