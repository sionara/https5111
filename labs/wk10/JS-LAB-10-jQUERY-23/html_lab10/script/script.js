window.onload = fxn;

function fxn(){
  let btn = document.getElementsByTagName("button");
  let triangle = document.getElementById("triangle");
  addEventListener("click", function transformShape(){
    triangle.classList.add("transform-onclick");
  })

  triangle.addEventListener("transitionend", function removeClass(){  
    triangle.classList.remove("transform-onclick");
  })
}
