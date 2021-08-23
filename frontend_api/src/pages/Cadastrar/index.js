import React, { useState } from "react";
import { Container, Titulo, AlertSuccess, AlertDanger, Form, Label, Input, Textarea, Button, ContainerButton } from "./styles";
import {Link} from 'react-router-dom';

export const Cadastrar = () => {
  // Definie os atributos
  const [tarefa, setTarefa] = useState({
    nome: '',
    descricao: '',
    "concluido": 0
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  // Recebe os dados do form
  const valorInput = e => setTarefa({ ...tarefa, [e.target.name]: e.target.value });

  const cadTarefa = async e => {
    e.preventDefault();

    /*
      // Visualização no console
      console.log(tarefa.nome);
      console.log(tarefa.descricao);
    */

    // Envia os dados para API
    await fetch("http://localhost/gerencia_tarefas/backend_api/public/api/tarefa", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tarefa)
    })
    .then((response) => response.json())
    .then((responseJson) => {
        //console.log(responseJson)

        if(responseJson.erro) {
          setStatus({
            // Erro caso não consiga conectar com a API
            type: 'erro',
            mensagem: 'Falha ao tentar cadastrar a tarefa. Por favor, verifique se os dados estão corretos.'
          });
        } else {
          setStatus({
            // Sucesso no cadastro da tarefa
            type: 'success',
            mensagem: 'Tarefa cadastrada com sucesso!'
          });
        }
      }).catch(() => {
        setStatus({
          // Erro caso não consiga conectar com a API
          type: 'erro',
          mensagem: 'Falha na conexão com o servidor. Por favor, tente novamente mais tarde.'
        });
    });
  }

  return(
    <Container>
      <Titulo>Criar nova tarefa</Titulo>

      {status.type === 'erro'? <AlertDanger>{status.mensagem}</AlertDanger> : ''}
      {status.type === 'success'? <AlertSuccess>{status.mensagem}</AlertSuccess> : ''}

      <Form onSubmit={cadTarefa}>
        <Label>Nome</Label>
        <Input type="text" name="nome" placeholder="Nome da tarefa" onChange={valorInput} />

        <Label>Descrição</Label>
        <Textarea name="descricao" placeholder="Descrição da tarefa" onChange={valorInput}></Textarea>

        <ContainerButton>
          <Link to="/"> 
            <Button type="button">
            <i class="fas fa-bars"></i>&nbsp; Listar tarefas
          </Button>
          </Link>
          
          <Button type="submit">
            <i class="fas fa-plus-circle"></i>&nbsp; Cadastrar
          </Button>
        </ContainerButton>
      </Form>
    </Container>
  );
}