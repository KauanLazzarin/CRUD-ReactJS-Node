import styled from 'styled-components';

const InputField = styled.input`
    width: 100%;
    height: 3vh;
    text-align: left;
    padding: 25px 15px;
    
    border: 1px solid var(--text-strong);
    font-family: 'Work Sans';
    color: var(--text-small);
    font-size: 24px;
    font-weight: 500;
`;

const InputDivider = styled.fieldset`
    width: 70%;
    margin: 3vh 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex-direction: column;
`;

const Label = styled.label`
    width: 70%;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Nunito';
`;

export default function Input ({ children, type, placeholder, id, name, updateFunction }, ...props) {
    return (
        <InputDivider>
            <Label htmlFor={id}>{children}</Label>
            <InputField 
                type={type} 
                id={id} 
                name={name} 
                placeholder={placeholder} 
                onChange={({target}) => updateFunction(target.value)}
                {...props}
            />
        </InputDivider>
    )    
};