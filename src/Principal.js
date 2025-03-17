import React from 'react';

import Formulario from './Formulario';
import Tabela from './Tabela';

class MeuComponente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            idade: '',
            cidade: '',
            pais: '',
            vetor: []
        }
    }

    excluirItem = (indice) => {
        let copiaVetor = [...this.state.vetor];
        copiaVetor.splice(indice, 1);
        this.setState({ vetor: copiaVetor });
        console.log(copiaVetor.length);
        if(copiaVetor.length === 0){
            this.setState({
                mostrarTabela: false,
                nome: '',
                idade: '',
                cidade: '',
                pais: ''
            })
        }
  };

    aoDigitar = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    }

    aoClicar = (botao) => {
        botao.preventDefault();
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome': this.state.nome,
            'idade': this.state.idade,
            'cidade': this.state.cidade,
            'pais': this.state.pais,
        })

        if (
            !this.state.nome.trim() ||
            !this.state.idade.trim() ||
            !this.state.cidade.trim() ||
            !this.state.pais.trim() 

        ) {
        alert('Não preencheu os campo obrigatórios');
       } else{
           this.setState({ vetor: copiaVetor });
           this.setState({
               mostrarTabela: true,
               nome: '',
               idade: '',
               cidade: '',
               pais: ''
           })
       }
    }

    render() {
        return (
            <div className="container d-flex flex-column align-items-center mt-5">
                <h4 className='mb-4'>Cadastrar de usuários</h4>
            <img src="/logo-usuario.png" alt="Logo Usuário" className="img-fluid mb-3" style={{ maxWidth: "150px" }} />
            <div className="col-7">
                <Formulario
                    campoNome={this.state.nome}
                    campoIdade={this.state.idade}
                    campoCidade={this.state.cidade}
                    campoPais={this.state.pais}
                    funcaoBotao={this.aoClicar}
                    funcaoCampo={this.aoDigitar}
                />

            </div>
            <div className="col-10 mt-4">

            {this.state.mostrarTabela && (
                <Tabela
                dados={this.state.vetor}
                excluirItem={this.excluirItem} />
            )}
            </div>
        </div>
        );
    }
}

export default MeuComponente;

