document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')
 
     let tamanhoAtualFontebody = 1;
     let tamanhoAtualFontenavlink = 2;
     // Get all elements with the class 'navlink'
    const navLinks = document.querySelectorAll('.nav-link');
 
     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFontebody += 0.1;
         tamanhoAtualFontenavlink += 0.1;

         document.body.style.fontSize = `${tamanhoAtualFontebody}rem`
         
         // Iterate through each navlink and change its font size
         navLinks.forEach(link => {
             link.style.fontSize = `${tamanhoAtualFontenavlink}rem`;
         });
     })
 
     diminuiFonteBotao.addEventListener('click', function(){
         tamanhoAtualFontebody -= 0.1;
         tamanhoAtualFontenavlink -= 0.1;
         
         document.body.style.fontSize = `${tamanhoAtualFontebody}rem`
 
         // Iterate through each navlink and change its font size
         navLinks.forEach(link => {
             link.style.fontSize = `${tamanhoAtualFontenavlink}rem`;
         });
     })
 
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
  
 })

 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });