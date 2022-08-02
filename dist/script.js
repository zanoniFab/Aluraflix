/*var listaImagens = [];
var listaNomes = [];

function adicionarFilme() {
  var imagemAdicionada = document.getElementById("imagemFilme").value;
  var nomeAdicionado = document.getElementById("nomeFilme").value;
  verifjpg(imagemAdicionada, nomeAdicionado);
}

function verifjpg(imagemFilme, nomeFilme) {
  if (imagemFilme.endsWith(".jpg")) {
    listarFilmesNaTela(imagemFilme, nomeFilme);
    listaImagens.push(imagemFilme);
    listaNomes.push(nomeFilme);
  } else {
    alert("Não é uma imagem válida. Tente inserir uma *.jpg");
  }
  document.getElementById("imagemFilme").value = "";
  document.getElementById("nomeFilme").value = "";
}

function listarFilmesNaTela(imagemFilme, nomeFilme) {
  var elementoImgFilme = "<img src =" + imagemFilme + ">";
  var elementoNomeFilme = "<p>" + nomeFilme + "</p>";
  var elementoDiv =
    "<div id=" + nomeFilme + ">" + elementoNomeFilme + elementoImgFilme + "</div>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoDiv;
}
*/
var listaImagens = [];
var listaNomes = [];

function adicionarFilme() {
  let imagem = document.getElementById("imagemFilme").value;
  let nome = document.getElementById("nomeFilme").value;
  verifyExists(imagem,nome);
}
function verifyJpg(imagem,nome){
  if (imagem.endsWith(".jpg")){
    listaImagens.push(imagem);
    listaNomes.push(nome);
    mostrarFilmes();
  } else {
    alert("Somente imagens no formato jpg são aceitas");
  }
}
function mostrarFilmes(){
  limpaTela();
  let eListaFilmes = document.getElementById("listaFilmes");
  for (var i=0; i<listaNomes.length; i++) {
    let div = "<div id = " + listaNomes[i] + " onmouseover='showOptions()'  onmouseout='hideOptions()' class='divFilme'>"
    let img = "<img src =" + listaImagens[i] + ">";
    let p = '<p class="nomeFilme" style="visibility:hidden">' + listaNomes[i] + "</p>"
    eListaFilmes.innerHTML+=  div + img + p;
  }
  document.getElementById("imagemFilme").value="";
  document.getElementById("nomeFilme").value="";
  document.getElementById("delFilme").value="";
}
function limpaTela(){
  const divFilmes = document.getElementById("listaFilmes");
  divFilmes.innerHTML = "";
}
function deletaFilme(){
  const deletar = document.getElementById("delFilme").value;
  for (var i=0; i<listaNomes.length; i++){
    if (listaNomes[i] == deletar){
        listaNomes.splice(i, 1);
    }
  mostrarFilmes();
  }
}
function showOptions(){
  let target = event.currentTarget;
  target.lastChild.style.visibility="visible";
}
function hideOptions(){
  let target = event.currentTarget;
  target.lastChild.style.visibility="hidden";
}
function verifyExists(imagem,nome){
  if (listaNomes.includes(nome,0)=== true){
    alert("Esse filme já existe!");
  } else {
    verifyJpg(imagem,nome)
  }
}