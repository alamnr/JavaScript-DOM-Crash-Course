 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items');


 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className  = 'list-group-item';
    //console.log(li);
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right';

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
 });

 itemList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
 });

 var filter = document.getElementById('filter');

 filter.addEventListener('keyup',(e)=>{
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    [...items].forEach(elem=>{
        var  itemName = elem.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            elem.style.display = 'block';
        }
        else{
            elem.style.display = 'none';
        }
    })
 });