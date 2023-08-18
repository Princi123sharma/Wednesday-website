
var moon=document.querySelector("#moon")
var flag=0;
moon.addEventListener("click",function(){
    if(flag==0){

    
    document.documentElement.style.setProperty("--sec","#000")
    document.documentElement.style.setProperty("--pri","rgb(245, 243, 234)")
    document.documentElement.style.setProperty("--mi","rgb(245, 243, 234)")
    moon.innerHTML=`<i class="ri-sun-fill"></i>`
    moon.style.color="rgb(245, 243, 234)"
     
    flag=1;

    }
    else{
        document.documentElement.style.setProperty("--sec","rgb(245, 243, 234)")
        document.documentElement.style.setProperty("--pri","#000")
        document.documentElement.style.setProperty("--mi","rgb(21, 27, 49)")
        
        moon.innerHTML=`<i class="ri-moon-fill"></i>`
       
        moon.style.color="#000"
        flag=0;
    }
})