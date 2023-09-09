(function(){
  var btn = document.querySelector(".check");
  btn.addEventListener("click", function() {
      this.className === "check" ? this.className += " desliza" : this.className = "check";
      this.innerHTML === "OFF" ? this.innerHTML = "ON" : this.innerHTML = "OFF";
      document.querySelector("#switch").classList.toggle("switch-off");
      document.querySelector("main").classList.toggle("amarelo");
  });
})();