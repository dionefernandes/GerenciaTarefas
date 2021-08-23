import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0 0 1em #6c757d;
    margin: 1.5em auto;
    padding: 16px 50px;
    width: 80%;
`;

export const Titulo = styled.h1`
    color: #333;
    font-size: 2rem;
    margin-bottom: 2em;
    text-align:center;
    width: 100%;
`;

export const Bold = styled.b`
    font-weight: 600;
`;

export const ContainerButton = styled.div`
    margin-left: 0.5em;
    text-align: right;
    width: 100%;
`;

export const Button = styled.button`
    background-color: #0d6efd;
    border: 1px solid #bfd9fe;
    border-radius: 4px;
    clear: both;
    color: #fff;
    cursor: pointer;
    font-size:.84rem;
    margin: 2em 0 1.8em 1em;
    padding: 8px 12px;
    width: 15em;

    :hover {
        background-color: #0dcaf0;
        color: #03f;
    }
`;