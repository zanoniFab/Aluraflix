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

function delFilme() {
  var filmeInformado = document.getElementById("delFilme").value;
  if (listaNomes.indexOf(filmeInformado) === 1) {
    filmeInformado.remove()
  }
}
*/
var listaImagens = [];
var listaNomes = [];

function adicionarFilme() {
  var imagem = document.getElementById("imagemFilme").value;
  var nome = document.getElementById("nomeFilme").value;
  verifyJpg(imagem, nome);
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
    eListaFilmes.innerHTML+= "<div id = " + listaNomes[i] + ">" + "<p>" + listaNomes[i] + "</p>" + "<img src =" + listaImagens[i] + ">"
  }
}
function limpaTela(){
  const divFilmes = document.getElementById("listaFilmes");
  divFilmes.innerHTML = "" 
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