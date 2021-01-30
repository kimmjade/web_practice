var todoList=document.querySelector('#list');
var i=0;

function add(){
    i++;
    var li=document.createElement('li');//li태그 생성
    var inputValue=document.querySelector('#input').value; //값
    var inputText=document.createTextNode(inputValue); //텍스트 
    var btn=document.createElement('input'); //input(삭제버튼) 태그생성
    btn.setAttribute('type','button'); //속성
    btn.setAttribute('value','x');
    btn.setAttribute('class','x');
    btn.setAttribute('onclick','remove(parentNode.id);');
    li.setAttribute('id',i);

    li.append(inputText);
    li.append(btn); 
    todoList.appendChild(li);
    jQuery( document ).ready(function( $ ) {
    $('#input').val(' ');
    });
}

function remove(id){
    var d=document.getElementById(id);
    todoList.removeChild(d);
}