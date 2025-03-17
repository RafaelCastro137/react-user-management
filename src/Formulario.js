import React from 'react';

class Formulario extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.funcaoBotao}>
                Nome
                <input type='text' value={this.props.campoNome} placeholder='Informe o nome' className='form-control mt-2' name='nome' onChange={this.props.funcaoCampo} />
                Idade
                <input type='number' value={this.props.campoIdade} placeholder='Informe a idade' className='form-control mt-2' name='idade' onChange={this.props.funcaoCampo} />
                Cidade 
                <input type='text' value={this.props.campoCidade} placeholder='Informe a cidade' className='form-control mt-2' name='cidade' onChange={this.props.funcaoCampo} />
                Pais
                <input type='text' value={this.props.campoPais} placeholder='Informe o pais' className='form-control mt-2' name='pais' onChange={this.props.funcaoCampo} />
                <input type='submit' value='Cadastrar' style={{
                    backgroundColor: '#28a745'
                }} className='btn btn-primary botao d-block mx-auto mt-5' />
            </form>
        );
    }
}

export default Formulario;

