import React, { useState, useEffect } from "react";
import { Titulo, FormFiltrar, Input, Select, Button, Table, faCheck } from "./styles";
import {Link} from 'react-router-dom';

export const Home = () => {
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

  // Executa ao carregar a página.
  // O [] serve para não ficar em loop infinito. Aguarda uma requisição
  useEffect(() => {
    getTarefas();
  }, [])

  return(
    <div>
      <Titulo>Lista de tarefas</Titulo>

      <div class="boxFiltro">
        <FormFiltrar>
          <Input type="text" name="busca" placeholder="Buscar..." />

          <Select name="situacao">
            <option value="Todas" selected>Todas</option>
            <option value="Concluidas">Concluídas</option>
            <option value="Pendentes">Pendentes</option>
          </Select>

          <Button type="submit">
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
                { tarefa.concluido === 0 ? <i class="fas fa-clipboard-check" id='espacaItem' title='Concluir tarefa'></i> : <i class="fas fa-check" id='espacaItem' title='Tarefa concluída'></i> }
                { tarefa.concluido === 0 ? <i class="fas fa-edit" id='espacaItem' title="Editar tarefa"></i> : '' }
                { tarefa.concluido === 0 ? <i class="fas fa-trash" id='espacaItem' title="Excluir tarefa"></i> : '' }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}