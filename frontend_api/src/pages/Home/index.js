import React, { useState, useEffect } from "react";
import { Table, Titulo } from "../styles";

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
      <Table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Concluído</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(tarefa => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.nome}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.concluido }</td>
              <td>Concluir</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}