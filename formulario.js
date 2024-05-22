const form = document.getElementById("form");
const nome = document.getElementById("nome");
const imail = document.getElementById("imail");
const senha = document.getElementById("senha");
const imailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/


form.addEventListener("submit",(event)=>{
event.preventDefault();

validacoes ();


});

function validacoes (){

  if(nome.value === "" || nome.value.length<= 2){
      nome.classList.add('error');
    document.querySelector("spam").setAttribute('style', 'display: block;');

  } else{

  nome.classList.remove('error');
  document.querySelector("spam").setAttribute('style' , 'display: none')

  }
  if(senha.value === "" || senha.value.length <=5){

    senha.classList.add('error');
    document.querySelector("#frase-senha").setAttribute('style', 'display: block;');

  }else{
    senha.classList.remove('error');
    document.querySelector("#frase-senha").setAttribute('style', 'display: none;');
  
  }
  const imailtext = imailregex.test(imail.value);
  
  if(imailtext===true ){
    
    imail.classList.remove('error');
    document.querySelector("#frase-imail").setAttribute('style', 'display: none;');
    
} 

else {
  imail.classList.add('error');
  document.querySelector("#frase-imail").setAttribute('style', 'display: block;');
  
}

if (nome.value !== "" && nome.value.length > 2 && senha.value !== "" && senha.value.length > 5 && imailtext) {

  setTimeout(function(){
    window.location.href = 'paginaprincipal.html';
  },2000);

  
  document.querySelector("h3").setAttribute('style', 'display: block;');
  form.setAttribute('style', 'display: none;');
}


}
