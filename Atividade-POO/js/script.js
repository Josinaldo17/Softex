class ItemBiblioteca {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }
 

    obterInformacoes(){
        return `Titulo: ${this.titulo} - autor ${this.numeroEdicao} (${this.anoPublicacao})`;
    }
    
    emprestar(){

        if (this.disponivel) {
            this.disponivel = false;
            return true;
        }

        return false;
    }
    
    devolver(){
        this.disponivel = true;
    }
    
    estaDisponivel() {
        return this.disponivel;
    }
}



class Livro extends ItemBiblioteca {
    constructor(titulo, autor, anoPublicacao, isbn, genero){

        super(titulo, autor, anoPublicacao);

        this.isbn = isbn;
        this.genero = genero;
    }
    
    obterInformacoes(){
        return `Livro: ${this.titulo} - ${this.autor} (${this.anoPublicacao}) - ISBN: ${this.isbn} - Gerenero: ${this.genero}`
    }
}



class Revista extends ItemBiblioteca {
    constructor(titulo, autor, numeroEdicao , anoPublicacao){

        super(titulo, autor, anoPublicacao);
        this.numeroEdicao = numeroEdicao;

    }
    

    obterInformacoes(){
        return `Revista: ${this.titulo} - ${this.autor} | Edição ${this.numeroEdicao} (${this.anoPublicacao})`;
    }

}

class Usuario {
    constructor(nome, id){

        this.nome = nome;
        this.id = id;
        this.itensEmprestados = [];

    }
    
    emprestarItem(item){

        if (item.emprestar()) {
            this.itensEmprestados.push(item);
            return true;
        }

        return false;
    }
    
    devolverItem(item){

        const index = this.itensEmprestados.indexOf(item);

        if (index > -1) {
            this.itensEmprestados.splice(index, 1);
            item.devolver();
            return true;
        }
        
        return false;
    }
}

function carregarLivrosTabela(){
    const livros = [
        new Livro("Dom Casmurro", "Machado de Assis", 1899),
        new Livro("O Alienista", "Machado de Assis", 1900),
        new Livro("Os Sertões", "Euclides da Cunha", 1938),
        new Livro("Iracema", "José de Alencar", 1910),
        new Livro("Dom Casmurro", "Machado de Assis", 1899),
        new Livro("O Alienista", "Machado de Assis", 1900),
        new Livro("Os Sertões", "Euclides da Cunha", 1938),
        new Livro("Dom Casmurro", "Machado de Assis", 1899),
        new Livro("O Alienista", "Machado de Assis", 1900),
        new Livro("Os Sertões", "Euclides da Cunha", 1938),
    ];
    
    // livros[3].emprestar();
    let tableLivros = document.getElementById("livros-tbody");
    for (let livro of livros) {
        let row = document.createElement("tr");
        let titulo = document.createElement("td");
        titulo.textContent = livro.titulo;
        let autor = document.createElement("td");
        autor.textContent = livro.autor;
        let ano = document.createElement("td");
        ano.textContent = livro.anoPublicacao;
        let disponivel = document.createElement("td");
        disponivel.textContent = livro.estaDisponivel() ? "Sim" : "Não";
        let tdEmprestar = document.createElement("td");
    
        let btnEmprestar = document.createElement("button");
        btnEmprestar.classList.add(livro.estaDisponivel() ? "btn_emprestar" : "btn_devolver");
        
        btnEmprestar.textContent = livro.estaDisponivel() ? "Emprestar" : "Devolver";
        // Altera botao para habilitado
        // btnEmprestar.disabled = !livro.estaDisponivel();
        btnEmprestar.addEventListener("click", ()=> {
            if (livro.estaDisponivel()){

                livro.emprestar();
                disponivel.textContent = "Não";
                btnEmprestar.textContent = "Devolver";
                btnEmprestar.classList.add("btn_devolver");
                btnEmprestar.classList.remove("btn_emprestar");
            }
            else{

                livro.devolver();
                disponivel.textContent = "Sim";
                btnEmprestar.textContent = "Emprestar";
                btnEmprestar.classList.add("btn_emprestar");
                btnEmprestar.classList.remove("btn_devolver");
            }

           
            
        });

        tdEmprestar.appendChild(btnEmprestar);
        row.appendChild(titulo);
        row.appendChild(autor);
        row.appendChild(ano);
        row.appendChild(disponivel);
        row.appendChild(tdEmprestar);
        tableLivros.appendChild(row);   
    }
}

function carregarRevistaTabela(){
    const revistas = [
        new Revista("Dom Casmurro", "Machado de Assis", "12º", 1899),
        new Revista("O Alienista", "Machado de Assis", "10º", 1900),
        new Revista("Os Sertões", "Euclides da Cunha", "12º", 1938),
        new Revista("Iracema", "José de Alencar", "14º", 1910)
    ];
    
    let tableRevistas = document.getElementById("revistas-tbody");
        for (let revista of revistas) {
            let row = document.createElement("tr");
            let titulo = document.createElement("td");
            titulo.textContent = revista.titulo;
            let autor = document.createElement("td");
            autor.textContent = revista.autor;
            let numeroEdicao = document.createElement("td");
            numeroEdicao.textContent = revista.numeroEdicao;
            let ano = document.createElement("td");
            ano.textContent = revista.anoPublicacao;
            let disponivel = document.createElement("td");
            disponivel.textContent = revista.estaDisponivel() ? "Sim" : "Não";
            let tdEmprestar = document.createElement("td");
        
            let btnEmprestar = document.createElement("button");
            btnEmprestar.classList.add(revista.estaDisponivel() ? "btn_emprestar" : "btn_devolver");
            
            btnEmprestar.textContent = revista.estaDisponivel() ? "Emprestar" : "Devolver";
            // Altera botao para habilitado
            // btnEmprestar.disabled = !revista.estaDisponivel();
            btnEmprestar.addEventListener("click", ()=> {
                if (revista.estaDisponivel()){

                    revista.emprestar();
                    disponivel.textContent = "Não";
                    btnEmprestar.textContent = "Devolver";
                    btnEmprestar.classList.add("btn_devolver");
                    btnEmprestar.classList.remove("btn_emprestar");
                }
                else{

                    revista.devolver();
                    disponivel.textContent = "Sim";
                    btnEmprestar.textContent = "Emprestar";
                    btnEmprestar.classList.add("btn_emprestar");
                    btnEmprestar.classList.remove("btn_devolver");
                }

            
                
            });

            tdEmprestar.appendChild(btnEmprestar);
            row.appendChild(titulo);
            row.appendChild(autor);
            row.appendChild(numeroEdicao);
            row.appendChild(ano);
            row.appendChild(disponivel);
            row.appendChild(tdEmprestar);
            tableRevistas.appendChild(row);   
        }
}

document.addEventListener("DOMContentLoaded", carregarLivrosTabela);
document.addEventListener("DOMContentLoaded", carregarRevistaTabela);

// let revista = new Revista("O Alienista", "Machado de Assis", "10º", 1900);
// console.log(revista.obterInformacoes())


