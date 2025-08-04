const botao = document.getElementById("mudarfundo");

botao.addEventListener("click", () => {
    document.body.classList.toggle("white-mode");
});

function mostrarTextoLoja() {
    document.getElementById("box-detalhesLoja").style.display = "flex";
    document.getElementById("meus_projetos").classList.add("desfocado");
}
function fecharAbaLoja() {
    document.getElementById("box-detalhesLoja").style.display = "none"
    document.getElementById("meus_projetos").classList.remove("desfocado")
}

function mostrarTextoSitePersona(){
    document.getElementById("box-detalhesSitePersona").style.display = "flex";
    document.getElementById("meus_projetos").classList.add("desfocado");
}
function fecharAbaPersona() {
    document.getElementById("box-detalhesSitePersona").style.display = "none"
    document.getElementById("meus_projetos").classList.remove("desfocado")
}

function mostrarTextoPortfo(){
    document.getElementById("box-detalhesPortfolio").style.display = "flex";
    document.getElementById("meus_projetos").classList.add("desfocado");
}
function fecharAbaPortfo() {
    document.getElementById("box-detalhesPortfolio").style.display = "none"
    document.getElementById("meus_projetos").classList.remove("desfocado")
}
