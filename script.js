//script.js

//seleção do input
const input = document.querySelector('input');

//seleção do botão adicionar
const btnAdicionar = document.querySelector('.adicionar > button');

//evento que dispara a função ao clicar no botão adicionar
btnAdicionar.addEventListener('click', adicionar);

//adciocionar ao apertar a tecla Enter
input.addEventListener('keyup', (e)=>{
    (e.keyCode == 13 ? adicionar(e) : null);
})

function adicionar(e){
    //selecionando campos
    const concluido = document.querySelector('.concluido');
    const pendente = document.querySelector('.pendente');

    //criando estrutura - lista e botões
    const novaTarefa = document.createElement('li');
    const btnCheck = document.createElement('button');
    const btnExcluir = document.createElement('button');

    //adicionando os icones dos botões
    btnCheck.innerHTML = '<i class="fa fa-check"></i>';
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';


    if(input.value !== ''){
        //aicionando valor do input na lista e esvaziando o input
        novaTarefa.textContent = input.value;
        input.value = '';

        //adicionando a tarefa 
        pendente.appendChild(novaTarefa);
        novaTarefa.appendChild(btnCheck);
        novaTarefa.appendChild(btnExcluir);

        //evento ao clickar no botão de check
        btnCheck.addEventListener('click', function(){
            //armazenando a tarefa referente ao botão selecionado - elemento pai do button - li
            const parent = this.parentNode;
            //remover tarefa da lista de pendentes
            parent.remove();
            //adicionando tarefa na lista de concluídos
            concluido.appendChild(parent);
            //remover botão de check
            btnCheck.style.display = 'none';
        });

        btnExcluir.addEventListener('click', function(){
            //armazenando a tarefa referente ao botão selecionado - elemento pai do button - li
            const parent = this.parentNode;
            //remover tarefa da lista de concluídos
            parent.remove();
        });
    }
}