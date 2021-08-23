import styled from "styled-components";

export const Container = styled.section`
    box-shadow: 0 0 1em #6c757d;
    margin: 1.5em auto;
    width: 80%;
    padding: 16px;
`;

export const Titulo = styled.h1`
    color: #333;
    font-size: 2rem;
    text-align:center;
    width: 100%;
`;

export const AlertSuccess = styled.p`
    background-color: #cff4fc;
    border-radius: 5px;
    color: #18606f;
    margin: 2em auto;
    padding: 16px;
    width: 95%;
`;

export const AlertDanger = styled.p`
    background-color: #f8d7da;
    border-radius: 5px;
    color: #842029;
    margin: 2em auto;
    padding: 16px;
    width: 95%;
`;

export const Form = styled.form`
    margin: 0.5em auto;
    width: 96%;
`;

export const Label = styled.label`
    clear: both;
    display: block;
    margin-top: 2em;
    padding: 10px 0 5px 0;
    width: 100%;
`;

export const Input = styled.input`
    border: 1px solid #bfd9fe;
    border-radius: 4px;
    clear: both;
    display: block;
    margin: 0.5em auto;
    padding: 12px;
    resize: vertical;
    width: 98.3%;
`;

export const Textarea = styled.textarea`
    border: 1px solid #bfd9fe;
    border-radius: 4px;
    clear: both;
    display: block;
    margin: 0.5em auto;
    min-height: 5em;
    padding: 12px;
    resize: vertical;
    width: 98.3%;
`;

export const Select = styled.select`
    border: 1px solid #bfd9fe;
    border-radius: 4px;
    clear: both;
    margin: 0.5em auto;
    margin-left: 0;
    padding: 8px;
    resize: vertical;
    width: 20%;
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