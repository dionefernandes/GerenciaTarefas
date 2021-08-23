import React, { useEffect, useState } from "react";
import { Container, Titulo, AlertSuccess, AlertDanger, Form, Label, Input, Textarea, Select, Button, ContainerButton } from "./styles";
import {Link} from 'react-router-dom';

export const Editar = (props) => {
  const [id] = useState(props.match.params.id);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [concluido, setConcluido] = useState('');  

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const editTarefa = async e => {
    e.preventDefault();

    // Envia os dados para API
    await fetch("http://localhost/gerencia_tarefas/backend_api/public/api/tarefa/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, nome, descricao, concluido})
    })
    .then((response) => response.json())
    .then((responseJson) => {
        //console.log(responseJson)

        if(responseJson.erro) {
          setStatus({
            // Erro caso não consiga alterar a tarefa
            type: 'erro',
            mensagem: 'Falha ao tentar alterar a tarefa. Por favor, verifique se os dados estão corretos.'
          });
        } else {
          setStatus({
            // Sucesso ao alterar a tarefa
            type: 'success',
            mensagem: 'Tarefa alterada com sucesso!'
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

  useEffect(() => {
      const getTarefa = async () => {
          await fetch("http://localhost/gerencia_tarefas/backend_api/public/api/tarefa/" + id)
          .then((response) => response.json())
          .then((responseJson) => {
              //console.log(responseJson);
              setNome(responseJson.data.nome);
              setDescricao(responseJson.data.descricao);
              setConcluido(responseJson.data.concluido);
          });
      }
      getTarefa();
  },[id]);


  return(
    <Container>
      <Titulo>Editar tarefa</Titulo>

      {status.type === 'erro'? <AlertDanger>{status.mensagem}</AlertDanger> : ''}
      {status.type === 'success'? <AlertSuccess>{status.mensagem}</AlertSuccess> : ''}

      <Form onSubmit={editTarefa}>
        <Label>Nome</Label>
        <Input type="text" name="nome" placeholder="Nome da tarefa" value={nome} onChange={e => setNome(e.target.value)} />

        <Label>Descrição</Label>
        <Textarea name="descricao" placeholder="Descrição da tarefa" value={descricao} onChange={e => setDescricao(e.target.value)}></Textarea>

        <Label>Concluir tarefa</Label>
        <Select name="concluido" onChange={e => setConcluido('1')}>
            <option value="0">Pendentes</option>
            <option value="1">Concluir</option>
        </Select>

        <ContainerButton>
          <Link to="/"> 
            <Button type="button">
            <i class="fas fa-bars"></i>&nbsp; Listar tarefas
          </Button>
          </Link>
          
          <Button type="submit">
            <i class="fas fa-edit" id="fa-edit"></i>&nbsp; Atualizar
          </Button>
        </ContainerButton>
      </Form>
    </Container>
  );
}