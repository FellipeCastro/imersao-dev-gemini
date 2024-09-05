function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        // Cria uma nova div para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}
