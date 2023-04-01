console.log ('mostrar o document', document);

console.log (document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const linkDoVideo = "https://www.youtube.com/embed/ZzHXjAJ86Zw?rel=0&amp;autoplay=1&amp;fs=1&amp;controls=1&amp;modestbranding=1&amp;showinfo=0&amp;disablekb=1&amp;iv_load_policy=3&amp;enablejsapi=1"
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

function alternarModal (){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
});





const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src","")
})

  
    
