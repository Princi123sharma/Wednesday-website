var tl=gsap.timeline({

});
tl.from("#nav h1,#nav2 h4,#nav3 i,#nav3 h4",{
    duration:1,
    opacity:0,
    y:-50,
    stagger:0.1,
})
tl.from("#center1 h1",{
    duration:0.6,
    opacity:0,
    y:30,
    scale:1.2,
})
tl.from("#center1 p",{
   duration:0.4,
   opacity:0,
   y:40,

})
tl.from("#page1 img",{
    duration:1,
   
    y:30,
    opacity:0,
    scale:1.3,
})
tl.from("#section1 h1,#section1 p",{
    duration:2,
   
    opacity:0,
   x:-200,
    stagger:0.25,
    ScrollTrigger:{
        Trigger:"#section1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
    
})

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