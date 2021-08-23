import styled from "styled-components";

export const Titulo = styled.h1`
    color: #333;
    font-size: 2rem;
    text-align:center;
    width: 100%;
`;

export const FormFiltrar = styled.form`
    width: 80%;
`;

export const Input = styled.input`
    border: 1px solid #bfd9fe;
    border-radius: 4px;
    margin: 0.5em auto;
    padding: 8px;
    resize: vertical;
    width: 50%;
`;

export const Select = styled.select`
    border: 1px solid #bfd9fe;
    border-radius: 4px;
    margin: 0.5em auto;
    margin-left: 1em;
    padding: 8px;
    resize: vertical;
    width: 20%;
`;

export const Button = styled.button`
    background-color: #0d6efd;
    border: 1px solid #bfd9fe;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size:.84rem;
    margin: 1em;
    margin-right:0;
    padding: 8px 12px;
    width: 15em;

    :hover {
        background-color: #0dcaf0;
        color: #03f;
    }
`;

export const Table = styled.table`
    margin: auto;
    margin-bottom: 2em;
    width: 90%;
    
    th {
        background-color: #b3e3ff;
        color: #002180;
        padding: 7px;
    }

    td {
        background-color: #e7f6ff;
        color: #444;
        padding: 5px 10px;
    }
`;