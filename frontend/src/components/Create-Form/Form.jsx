import styled from 'styled-components';

const FormContainer = styled.main`
    margin-top: 10vh;
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: var(--box-bg);
`;

const FormBox = styled.form`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: var(--bg-light);
`;

export default function Form () {
    return (
        <FormContainer>
            <FormBox>
                <h1>opa</h1>
            </FormBox>
        </FormContainer>
    )
}