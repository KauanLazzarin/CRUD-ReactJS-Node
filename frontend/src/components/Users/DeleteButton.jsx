import styled from 'styled-components';

const Button = styled.button`
    padding: 6px;
    background: none;
    color: red;
    font-size: 28px;
    font-family: 'Nunito';
    font-weight: bold;
    transition: 0.2ms;

    &:hover {
        filter: brightness(0.8);
    }
`;

export default function DeleteButton ( { productId } )  {
    async function deleteClient () {
        try {
            await fetch(`http://localhost:3003/delete/${productId}`, {
                method: 'DELETE'
            });

            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Button onClick={deleteClient}>
            X
        </Button>
    );
};