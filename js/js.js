$(document).ready(function(){
    var search = $('#search');
    search.click(function(){
        if(confirm('Are you sure you want to do away with this document ')){
            document.style.display='none';
            return false;

        } else{
            alert ('YOu will not loss your body')
        }
    })
















});

var items = document.getElementById('add');

items.addEventListener('mouseover', right);
function right(e){
//console.log(e.clientY)
    document.body.style.background="rgb("+e.clientX+","+e.clientY+","+"255)";
}

