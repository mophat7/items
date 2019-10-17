var form = document.getElementById('addForm');
var itemList= document.getElementById('items');
var itemAdd = document.getElementById('itemAdd')
var filter = document.getElementById('filter')

// FOr submit event
form.addEventListener('submit', addItem);


function addItem(e){
    e.preventDefault();
    if(itemAdd.value!==""){
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //child
    
    var textNode= document.createTextNode(itemAdd.value);
    li.appendChild(textNode);
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-sm btn-danger float-right delete';
    var dltext = document.createTextNode('Delete')
    deletebtn.appendChild(dltext);
    li.appendChild(deletebtn)


    itemList.appendChild(li)


    console.log(li)









    }else{
        alert('Enter Some Items to add')
    }

}

itemList.addEventListener('click', deleteItem);

function deleteItem(e){
   if(e.target.classList.contains('delete')){
     if(  confirm('Are you sure you want to delete?'))
{
    
    var li = e.target.parentElement;
    itemList.removeChild(li);

}   }
}

//search buttons
filter.addEventListener('keyup', filterItems);

function filterItems(e){
    var text = filter.value.toLowerCase()
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';

        } else{
            item.style.display= 'none';
        }

    })

}
