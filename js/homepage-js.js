
function start(){
  show("c-tab");
  change("c", true);
}

function change(clicked, start){
    if(clicked == "c"){
      if(start){
        document.getElementById("c-tab-btn").style.transitionDuration = "0s";
      }else{
        document.getElementById("c-tab-btn").style.transitionDuration = "0.3s";
      }
        document.getElementById("c-tab-btn").style.backgroundColor = "#42dff4";
        document.getElementById("v-tab-btn").style.backgroundColor = "white";
        hide("v-tab");
        show("c-tab");
    }else if(clicked == "v"){
        document.getElementById("v-tab-btn").style.backgroundColor = "#42dff4";
        document.getElementById("c-tab-btn").style.backgroundColor = "white";
        hide("c-tab");
        show("v-tab");
    }
}

function hide(id){
    document.getElementById(id).style.display = "none"
}

function show(id){
    document.getElementById(id).style.display = "block"
}
