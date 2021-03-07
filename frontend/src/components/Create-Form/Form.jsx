import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import Input from './Input';

const FormContainer = styled.main`
    margin: 5vh 0;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translateY(-10vh);
    opacity: 0;

    background-color: var(--box-bg);

    animation: slide-down 0.7s forwards;

    @keyframes slide-down {
        to {
            transform: inherit;
            opacity: 1;
        }
    }
`;

const FormBox = styled.form`
    width: 70%;
    height: auto;
    padding: 20vh 0;
    border-top: 6px solid #19195c;
    border-bottom: 6px solid #19195c;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: var(--bg-light);
`;

const FormBoxHeader = styled.h2`
    font-size: 42px;
    font-family: 'Nunito';
    color: var(--text-strong);
`;

export default function Form () {

    const [clientName, setClientName] = React.useState('');
    const [clientEmail, setClientEmail] = React.useState('');
    const [clientCpf, setClientCpf] = React.useState('');
    const [clientPhone, setClientPhone] = React.useState(0);
    const [data, setData] = React.useState({});

    function handleSubmit (event) {
        console.log(data);
        event.preventDefault();
    };

    React.useEffect(() => {
        
        setData({
            name: clientName,
            email: clientEmail,
            cpf: clientCpf,
            phone: clientPhone
        })

    }, [clientName, clientEmail, clientCpf, clientPhone]);

    return (
        <FormContainer>
            <FormBox onSubmit={handleSubmit}>
                <FormBoxHeader>Cadastro de clientes</FormBoxHeader>
                <Input 
                    type="text" 
                    placeholder="Nome" 
                    id="clientName" 
                    name="clientName"
                    updateFunction={setClientName}
                >
                    Nome do cliente
                </Input>

                <Input 
                    type="email" 
                    placeholder="Email" 
                    id="clientEmail" 
                    name="clientEmail"
                    updateFunction={setClientEmail}
                >
                    Email do cliente
                </Input>

                <Input 
                    type="text" 
                    placeholder="CPF" 
                    id="clientCPF" 
                    name="clientCPF"
                    updateFunction={setClientCpf}
                >
                    CPF do cliente
                </Input>

                <Input 
                    type="number" 
                    placeholder="Numero de telefone" 
                    id="clientNumber" 
                    name="clientNumber"
                    updateFunction={setClientPhone}
                >
                    Telefone do cliente
                </Input>

                <Button type="submit">Cadastrar</Button>
            </FormBox>
        </FormContainer>
    )
}