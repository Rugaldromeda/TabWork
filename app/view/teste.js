class criaPlanilha {
    constructor(){
        this.listaInputs = [];
    }

    adciona(dado) {
        this.listaInputs.push(dado);
    }
}


class geraPlanilha {
    constructor() {
        this.novaPlanilha = new criaPlanilha();
    }
    templateForm(nomeObjeto){
        const local = document.querySelector("#local"); 
        const template = document.createElement = `<form id='${nomeObjeto}' onsubmit="tal(event)">
                                                        <input type="text" class="texto">
                                                        <select name="" id="select">
                                                            <option value="numero">Numero</option>
                                                            <option value="data">Data</option>
                                                            <option value="dinheiro">Dinheiro</option>
                                                        </select>
                                                        <input type="submit" >
                                                    </form>`;
        local.innerHTML = template;
    }

}







const geradorPlanilha = new geraPlanilha();
const formCriaPlanilha = document.querySelector("#formTemplate");
formCriaPlanilha.addEventListener("submit", (event) => {
    event.preventDefault();
    geradorPlanilha.templateForm(`geradorPlanilha`);
    objetoMapa.set(`geradorPlanilha`, geradorPlanilha );
    
});


function tal(event){
    event.preventDefault();
    const idEvent = event.target.getAttribute("id");
    const eventInputs = new modeloInputs()
    
    
    const idGerador = objetoMapa.get(idEvent);
    
    eventInputs.pegaValores(idGerador.novaPlanilha);
    let lista = document.querySelector(".lista")
    const listaInput= JSON.stringify(idGerador.novaPlanilha.listaInputs);
    //lista.textContent = `'${listaInput}'`;
    //const teste = [...idGerador.novaPlanilha.listaInputs];
    for (let i = 0; i < idGerador.novaPlanilha.listaInputs.length; i++) {
        const listaDosInputs = idGerador.novaPlanilha.listaInputs[i];
        const nome = JSON.stringify(listaDosInputs.nome);
        const tipo = JSON.stringify(listaDosInputs.tipo);
        const dados = document.createElement = `<div>${nome} ${tipo}</div>`
        
        lista.innerHTML = dados;
        
    }
}
console.log(geradorPlanilha.novaPlanilha)



