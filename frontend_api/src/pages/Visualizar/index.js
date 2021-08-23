import React, { useEffect, useState } from "react";
import { Container, Titulo, Bold, ContainerButton, Button } from "./styles";
import {Link} from 'react-router-dom';

export const Visualizar = (props) => {
    const [data, setData] = useState([]);

    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getTarefa = async () => {
            await fetch("http://localhost/gerencia_tarefas/backend_api/public/api/tarefa/" + id)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                setData(responseJson.data)
            });
        }
        getTarefa();
    },[id]);

    return (
        <Container>
            <Titulo>Visualizar tarefa</Titulo>

            <p><Bold>Código:</Bold> {data.id}</p>
            <p><Bold>Nome:</Bold> {data.nome}</p>
            <p><Bold>Descrição:</Bold> {data.descricao}</p>
            <p><Bold>Situação:</Bold> { data.concluido === 1 ? 'Concluída' : 'Pendente' }</p>

            <ContainerButton>
                <Link to="/"> 
                    <Button type="button">
                    <i class="fas fa-bars"></i>&nbsp; Listar tarefas
                </Button>
                </Link>
            </ContainerButton>
        </Container>
    )
}