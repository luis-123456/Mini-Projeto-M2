class Cadastro {
    constructor() {
        this.dados = [];
        this.editarIndex = null;
    }

    cadastrar(nome, email) {
        const dado = { nome, email };
        if (this.editarIndex !== null) {
            this.dados[this.editarIndex] = dado; // Editar
            this.editarIndex = null;
        } else {
            this.dados.push(dado); // Cadastrar
        }
        this.atualizarLista();
    }
    deletar(index) {
        this.dados.splice(index, 1);
        this.atualizarLista();
    }

    editar(index) {
        const dado = this.dados[index];
        document.getElementById("input-nome").value = dado.nome;
        document.getElementById("input-email").value = dado.email;
        this.editarIndex = index;
    }

    atualizarLista() {
        const listaElement = document.getElementById("lista-cadastrados");
        listaElement.innerHTML = ''; // Limpa a lista

        this.dados.forEach((dado, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${dado.nome} - ${dado.email}</span>
                <button class="edit" onclick="cadastro.editar(${index})">Editar</button>
                <button class="delete" onclick="cadastro.deletar(${index})">Deletar</button>
            `;
            listaElement.appendChild(li);
        });
    }
}
