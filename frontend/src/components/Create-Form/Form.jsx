import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import {Rotating} from './CreatingLoading';
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
    const [isCreating, setCreating] = React.useState(false);

    function handleSubmit (event) {
        event.preventDefault();
        console.log(data);
        createClient();
    };

    async function createClient () {
        try {
            setCreating(true);
            await fetch("http://localhost:3003/create", {
                method: 'POST',
                headers: { 
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        name: clientName,
                        email: clientEmail,
                        phoneNumber: clientPhone,
                        cpf: clientCpf
                    }
                )
            });

            setCreating(false);
        } catch (error) {
            console.log(error);
            alert('Algo deu errado, contate os administradores ou tente novamente');
        }
    }

    React.useEffect(() => {
        
        setData({
            "name": clientName,
           "email": clientEmail,
            "phoneNumber": clientPhone,
            "cpf": clientCpf
        })

    }, [clientName, clientEmail, clientCpf, clientPhone]);

    return (
        <FormContainer >
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

                {
                    isCreating === true ? <Rotating/> : <Button>Cadastrar</Button> 
                }
            </FormBox>
        </FormContainer>
    )
}