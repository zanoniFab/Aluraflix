var filmes = [];

function verificarRepetido(id){
  for (i=0; i<filmes.length;i++){
    if (filmes[i].id == id){
      return true;
    }
  }
  return false;
}
function criarObjeto(){ //faz uma lista com os filmes já em formato de objeto
  let novoFilmeNome = document.getElementById("nomeFilme").value;
  let novoFilmeImagem = document.getElementById("imagemFilme").value;
  let id = tratarNome(novoFilmeNome);
  if (!verificarRepetido(id)) {
      if (novoFilmeImagem.endsWith(".jpg")){
        let novoFilme = {
          nome: novoFilmeNome,
          imagem: novoFilmeImagem,
          id: id,
        }
        filmes.push(novoFilme);
        mostrarFilmes();
      } else {
        alert("Somente imagens no formato jpg são aceitas");
      }
  } else {
    alert("Esse filme já existe!");
  }
}
function tratarNome(nome) {
  return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '') //acento
    .toLowerCase() //letra minuscula
    .replace(/\s+/g,""); //espaco em branco
}
function mostrarFilmes(){
  limpaTela();
  let divFilmes = document.getElementById("listaFilmes");
  for (let i=0; i<filmes.length; i++) {
    let nome = filmes[i].nome;
    let id = filmes[i].id;
    let imagem = "<img src ='"+ filmes[i].imagem +"'>";
    let p = "<p class='nomeFilme' style='visibility:hidden'>"+filmes[i].nome+"</p>";
    //let button = "<button class='lixo' style='visibility:hidden'".concat("onClick=excluirFilme(", "\"", nome_filme, "\"", ")>❌</button>;")
    let button = "<button class='lixo' style='visibility:hidden' onClick='excluirFilme(\""+ id + "\")'>❌</button>";
    let div = "<div id = '"+filmes[i].id+"' onmouseover='showOptions()'  onmouseout='hideOptions()' class='divFilme'>" + imagem + p + button +"</div>";
    divFilmes.innerHTML+=  div;
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
function excluirFilme(id) {
  for (let i=0; i<this.filmes.length; i++){
    if (this.filmes[i].id == id){
        filmes.splice(i, 1);
    }
    mostrarFilmes();
  }
}