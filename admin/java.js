let list=document.querySelectorAll(".navigation");
function active(){
    list.forEach(item =>{

    })
}
//menu toggle
let toggle =document.querySelector(".toggle");
let navigation=document.querySelector(".navigation");
let main=document.querySelector(".main");

toggle.onclick = function()
{
    navigation.classList.toggle("active");
    main.classList.toggle("active");

}


const a = document.getElementById("listdoctor");
const b=document.getElementById("listbn");
const c=document.getElementById("lich_kham");
const d= document.getElementById("lich_lam");
const e= document.getElementById("lich_lamm");

function show_lam(){
   d.style.display="block";
    b.style.display="none";
    a.style.display="none";
    c.style.display="none";
    e.style.display="none";
}
function show_lamm(){
   e.style.display="block";
    b.style.display="none";
    a.style.display="none";
    c.style.display="none";
    d.style.display="none";
}
function show_kham(){
    c.style.display="block";
    b.style.display="none";
    a.style.display="none";
    d.style.display="none";
    e.style.display="none";
}
function show_dr(){
    a.style.display = "block";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
}

function show_bn(){
    b.style.display="block";
    a.style.display="none";
    c.style.display="none";
    d.style.display="none";
     e.style.display="none";
}

function show_logout(){
    e.style.display="block";
    a.style.display="none";
    c.style.display="none";
    d.style.display="none";
    b.style.display="none";
}
