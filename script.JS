import listadeestados from './estados.js';

let tagUl=document.getElementById('lista-estados');
let Estado=listadeestados[15];

tagUl.innerHTML="<li> Estado: " + Estado.nome + ",regiao: "+ Estado.regiao.nome+ "</li>";
//tagUl.textContent="conteudo de texto"//Renderiza tudo como texto puro
//tagUl.innerHTML="<li>Estado:Acre,Região:Norte<li>"//Renderiza tag HTML

console.log(tagUl.innerHTML)=

setTimeout(function() {
    tagUl.innerHTML=tagUl.innerHTML
})
