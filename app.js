var list =document.getElementById("list");

function addTodo(){
var todo_Item = document.getElementById("todo-Item");
var li = document.createElement("li")
var liText = document.createTextNode(todo_Item.value)
li.appendChild(liText)
//create Delete button
var delbtn = document.createElement("button")
var btntext = document.createTextNode("Delete")
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(btntext)
li.appendChild(delbtn)
//create edit button
var editBtn = document.createElement("button");
var edittxt = document.createTextNode("Edit")
editBtn.appendChild(edittxt)
editBtn.setAttribute('class',"ebtn")
editBtn.setAttribute("onclick","textEdit(this)")
li.appendChild(editBtn)


todo_Item.value =""

list.appendChild(li)

}             
function textEdit(e){
var val = prompt("Enter text here",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = val
}     

function deleteItem(e){
e.parentNode.remove()
}
function deleteall(){
list.innerHTML=""
}

