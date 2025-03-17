import React from 'react';

class Tabela extends React.Component {

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                        <th>País</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dados.map((element, indice) => {
                        return (
                            <tr key={indice}>
                                <td>{element.nome}</td>
                                <td>{element.idade} anos</td>
                                <td>{element.cidade}</td>
                                <td>{element.pais}</td>
                                <td>
                                    <button
                                        className="btn btn-danger botao d-block mx-auto"
                                        onClick={() => this.props.excluirItem(indice)}
                                    >
                                        Excluir
                                    </button>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

export default Tabela;
