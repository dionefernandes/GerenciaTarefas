import React, { useState, useEffect} from "react";
import { Titulo, AlertSuccess, AlertDanger, FormFiltrar, Input, Select, Button, Table } from "./styles";
import {Link} from 'react-router-dom';

export const Home = (props) => {
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const [concluido, setConcluido] = useState('');
  const [busca, setBusca] = useState('');

  const fitraTarefa = async e => {
    e.preventDefault();

    if(busca == '' && concluido == '') {
      setStatus({
        // Erro caso não consiga excluir a tarefa
        type: 'erro',
        mensagem: 'Você deve informar os termos de busca e a situação da tarefa desejados.'
      });
      return getTarefas();
    }

    let rota = "http://localhost/gerencia_tarefas/backend_api/public/api/tarefa/filter/" + busca + "/" + concluido;
    
    if(busca == '' || concluido == '') {
      rota = "http://localhost/gerencia_tarefas/backend_api/public/api/tarefa/filter/" + concluido;
    }

    console.log(rota);

    // Envia os dados para API
    await fetch(rota, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
        //console.log(responseJson)

        setData(responseJson.data)
    });
  }
  

  // Constante que receberá os dados. É iniciada com um array vazio
  const [data, setData] = useState([]);

  const getTarefas = async() => {
    fetch("http://127.0.0.1/gerencia_tarefas/backend_api/public/api/tarefas")
    .then((response) => response.json())
    .then((responseJson) => (
      
      /*
      // Mostar os dados no console
      console.log(responseJson),
      */
      
      setData(responseJson.data)
    ));
  }

  const apagarTarefa = async(id) => {
    //console.log(id);

    await fetch("http://localhost/gerencia_tarefas/backend_api/public/api/tarefa/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)

        if(responseJson.erro) {
          setStatus({
            // Erro caso não consiga excluir a tarefa
            type: 'erro',
            mensagem: 'Falha ao tentar excluir a tarefa. Por favor, verifique se os dados estão corretos.'
          });
        } else {
          setStatus({
            // Sucesso ao excluir a tarefa
            type: 'success',
            mensagem: 'Tarefa excluida com sucesso!'
          });
          getTarefas();
        }
      }).catch(() => {
        setStatus({
          // Erro caso não consiga conectar com a API
          type: 'erro',
          mensagem: 'Falha na conexão com o servidor. Por favor, tente novamente mais tarde.'
        });
    });
  }
  
  // Executa ao carregar a página.
  // O [] serve para não ficar em loop infinito. Aguarda uma requisição
  useEffect(() => {
    getTarefas();
  }, [])

  return(
    <div>
      <Titulo>Lista de tarefas</Titulo>

      {status.type === 'erro'? <AlertDanger>{status.mensagem}</AlertDanger> : ''}
      {status.type === 'success'? <AlertSuccess>{status.mensagem}</AlertSuccess> : ''}

      <div class="boxFiltro">
        <FormFiltrar>
          <Input type="text" name="busca" placeholder="Buscar..." onChange={e => setBusca(e.target.value)} />

          <Select name="concluido"  onChange={e => setConcluido(e.target.value)}>
            <option value="">Todas</option>
            <option value="1">Concluídas</option>
            <option value="0">Pendentes</option>
          </Select>

          <Button type="buttom" onClick={fitraTarefa}>
            <i class="fas fa-filter"></i>&nbsp; Filtrar
          </Button>
        </FormFiltrar>

        <Link to="/Cadastrar">
          <Button type="button"><i class="fas fa-plus"></i> Nova tarefa</Button>
        </Link>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Concluída</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(tarefa => (
            <tr key={tarefa.id}>
              <td class="centraConteudo">{tarefa.id}</td>
              <td>{tarefa.nome}</td>
              <td>{tarefa.descricao}</td>
              <td class="centraConteudo">
                { tarefa.concluido === 1 ? 'Sim' : 'Não' }
              </td>
              <td class="centraConteudo">
                <Link to={"/visualizar/" + tarefa.id}>
                  <i class="fas fa-search-plus" title="Visualizar tarefa"></i>
                </Link>

                <Link to={"/editar/" + tarefa.id}>
                  { tarefa.concluido === 0 ? <i class="fas fa-edit" id='espacaItem' title="Editar tarefa"></i> : '' }
                </Link>

                <Link onClick={() => apagarTarefa(tarefa.id)}>
                  { tarefa.concluido === 0 ? <i class="fas fa-trash" id='espacaItem' title="Excluir tarefa"></i> : '' }
                </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}