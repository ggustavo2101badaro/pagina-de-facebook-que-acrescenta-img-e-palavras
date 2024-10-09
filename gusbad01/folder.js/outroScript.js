const form = document.getElementById("formulario");
const username = document.getElementById("userName")
let selectedImage = null //variavel que armazena a img selecionada

function atualizarImagem(){
    //obtem o 1º arquivo da entrada de img
    const image = document.getElementById('postImage').files[0];
    // o zero é porque comeca vazia

    //se uma img foi selecionada, cria uma url temporaria para exibição
    if(image){
        selectedImage = URL.createObjectURL(image);
    }

}

//Funçao para criar uma nova postagem
function post(){
//obtem o conteudo de campo de texto e o feed
const content = document.getElementById('postContent').value;
const feed = document.getElementById('feed');

//verifica se o conteudo e img estao vazios 
if(!content && !selectedImage){
    alert('Por favor, insira uma mensagem ou selecione uma img');
    return;
    // impede a postagem se ambos estiverem vazios 
}

//cria um novo elemento para a postagem 
const postElement = document.createElement('div');
postElement.className = 'post'; // adiciona a classe para estilização

//se houver conteudo, cria um paragrafo para ele 
if(content){
    const textElement = document.createElement('p');  // o 'p' é para a existencia de um paragrafo
    textElement.innerText = content; // define o texto de postagem. 
    postElement.appendChild(textElement); // adiciona o texto à postagem. Há a separacao de filho e pai (agora é como se postElement fosse o pai)
}

//se houver uma img selecionada, cra um elemento de img
if(selectedImage){
    const img  = document.createElement('img');
    img.src = selectedImage; // define a fonte da imagem
    img.style.maxWidth= '100%';// garante que a img não exceda o tamanho
    postElement.appendChild(img);// adiciona a img à postagem
    selectedImage = null;// reseta a img selecionada após a postagem(apaga a img já existente para que possa ser acrescentada outra)
} 

// Cria um botao de excluir
const deleteButton = document.createElement('button');
deleteButton.className = 'delete-button';// adiciona classe para estilização ...
deleteButton.innerText = 'Excluir';// define o texto do botao
deleteButton.onclick = function(){
    feed.removeChild(postElement); //Remove a postagem do feed quando o botao ...
}
postElement.appendChild(deleteButton);// adiciona botao à postagem

// adiciona a nova postagem no topo do feed 
feed.prepend(postElement);
// limpa os campos de entrada apos a postagem
document.getElementById('postContent').value = '';
document.getElementById('postImage').value = '';


} 

/*

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})




userName.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const userNameValue = userName.value;

  if(userNameValue === ""){
    errorInput(userName, "Preencha o espaço indicado.")
  }else{
    const formItem = userName.parentElement;
    formItem.className = "formulario-content"
  }

}


function checkForm(){
  checkInputUsername();


  const formItems = form.querySelectorAll(".formulario-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "formulario-content"
  });

  if(isValid){
    alert("Publicação realizada com sucesso!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "formulario-content error"

}
  */