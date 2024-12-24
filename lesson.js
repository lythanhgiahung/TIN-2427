let ID=['Sort','Bs','Twopointer','Ps'];
let f=document.querySelectorAll('.board ul li');

f.forEach((li,key) => {
    li.addEventListener('click',function(){
        location.href=ID[key]+".html";
    })
});