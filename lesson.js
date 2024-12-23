let ID=['Sort','Bs'];
let f=document.querySelectorAll('.board ul li');

f.forEach((li,key) => {
    li.addEventListener('click',function(){
        location.href=ID[key]+".html";
    })
});