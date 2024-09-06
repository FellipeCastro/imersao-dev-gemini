function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo pesquisa estiver vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite um atleta para prosseguir</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Se o titulo incluir o campo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { 
            // Cria uma nova div para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        } 
    }

    if (!resultados) {
        resultados = "<p>Nenhum atleta encontrado</p>";
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}
