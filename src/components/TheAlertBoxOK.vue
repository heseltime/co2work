<template>
  <div class="alert success"><span class='alert-close' onclick="this.parentElement.style.display='none';">&times;</span><b>Info</b><br>
    <p>Datenschutz nehmen wir ernst, daher werden in dieser App weder Daten gespeichert noch weitergegeben.</p>

    <p><a href="https://www.zukunft-bildung-salzkammergut.at/datenschutz/">Weitere Infos hierzu</a></p>
  </div>
</template>

<script>
// Get all elements with class="closebtn"
var close = document.getElementsByClassName("alert-close");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
    // When someone clicks on a close button
    close[i].onclick = function(){

        // Get the parent of <span class="closebtn"> (<div class="alert">)
        var div = this.parentElement;

        // Set the opacity of div to 0 (transparent)
        div.style.opacity = "0";

        // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}
</script>


<style scoped>
.alert{

    min-height: 38px;
    padding: 12px 15px 15px;
    margin: 45px auto;
    border-radius: 4px;
    border-left: 4px solid;
	  opacity:1;
	  transition: opacity 0.6s;
	  max-width:90%
}
.warning {
    background: rgba(244, 215, 201, .37);
    color: #d93025;
    border-color: #d93025;
}
.info {
    background: rgba(186, 208, 228, .37);
    color: #00539f;
    border-color: #00539f;
}
.success {
    background: #edf7ee;
    color: #4CAF50;
    border-color: #4CAF50;
}
.tip {
    background: #fff5e6;
    color: #ff9800;
    border-color: #ff9800;
}
.alert-close{
	   padding-left: 15px;
    font-weight: bold;
    float: right;
    font-size: 20px;
    line-height: 18px;
    cursor: pointer;
	   transition:.30s all;
}
.alert-close:hover{
	color:#000;
}

</style>
