var listaImagens = ["https://upload.wikimedia.org/wikipedia/pt/3/32/The_Notebook_p%C3%B4ster.jpg","https://images-na.ssl-images-amazon.com/images/I/61MeTlsDRtL.jpg"];

var listaNomes = ["Diário de Uma Paixão","A Lista de Schindler"];

var nomesTratados = ["diariodeumapaixao","alistadeschindler"];

mostrarFilmes();
const inputSearch = document.querySelector("#search");

inputSearch.addEventListener("input", function(){
  const str = this.value;
  console.log(str)
})






function adicionarFilme() {
  let imagem = document.getElementById("imagemFilme").value;
  let nome = document.getElementById("nomeFilme").value;
  let newName = tratarNome(nome);
  verifyExists(imagem,nome,newName);
}
function verifyExists(imagem,nome,newName){
  if (nomesTratados.includes(newName,0)=== true){
    alert("Esse filme já existe!");
  } else {
    verifyJpg(imagem,nome,newName);
  }
}
function verifyJpg(imagem,nome,newName){
  if (imagem.endsWith(".jpg")){
    listaImagens.push(imagem);
    listaNomes.push(nome);
    nomesTratados.push(newName);
    mostrarFilmes();
  } else {
    alert("Somente imagens no formato jpg são aceitas");
  }
}
function mostrarFilmes(){
  limpaTela();
  let eListaFilmes = document.getElementById("listaFilmes");
  for (let i=0; i<listaNomes.length; i++) {
    let nomeFilme = listaNomes[i];
    let nomeTratado = nomesTratados[i];
    let img = "<img src ='"+ listaImagens[i] +"'>";
    let p = "<p class='nomeFilme' style='visibility:hidden'>"+listaNomes[i]+"</p>";
    //let button = "<button class='lixo' style='visibility:hidden'".concat("onClick=excluirFilme(", "\"", nome_filme, "\"", ")>❌</button>;")
    let button = "<button class='lixo' style='visibility:hidden' onClick='excluirFilme(\""+ nomeFilme + "\")'>❌</button>";
    let div = "<div id = '"+nomesTratados[i]+"' onmouseover='showOptions()'  onmouseout='hideOptions()' class='divFilme'>" + img + p + button +"</div>";
    eListaFilmes.innerHTML+=  div;
  }
  document.getElementById("imagemFilme").value="";
  document.getElementById("nomeFilme").value="";
  document.getElementById("search").value="";
}

function limpaTela(){
  const divFilmes = document.getElementById("listaFilmes");
  divFilmes.innerHTML = "";
}
function showOptions(){
  let target = event.currentTarget;
  target.querySelector(".lixo").style.visibility="visible"
  target.querySelector(".nomeFilme").style.visibility="visible";
}
function hideOptions(){
  let target = event.currentTarget;
  target.querySelector(".lixo").style.visibility="hidden"
  target.querySelector(".nomeFilme").style.visibility="hidden";
}

function excluirFilme(nome) {
  let excluirNew = tratarNome(nome)
  for (let i=0; i<this.listaNomes.length; i++){
    if (this.listaNomes[i] == nome){
        listaNomes.splice(i, 1);
        listaImagens.splice(i, 1);
        nomesTratados.splice(i,1);
      }
    mostrarFilmes();
}
}
function tratarNome(nome) {
  return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '') //acento
    .toLowerCase() //letra minuscula
    .replace(/\s+/g,""); //espaco em branco
}