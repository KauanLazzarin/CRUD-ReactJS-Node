import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--box-bg);
`;

const HeaderTitle = styled.h1`
    font-size: 36px;
    font-family: 'Nunito';
    color: var(--text-strong);
`;

export default function Header ({children}) {
    const paths = [
        {
            name: 'Clientes',
            href: '/users'
        },
        
        {
            name: 'Cadastrar Cliente',
            href: '/create'
        }
    ]
    
    return (
        <HeaderContainer>
            <HeaderTitle>Gerenciador de clientes</HeaderTitle>

            <Navigation paths={paths} />
        </HeaderContainer>
    )
};