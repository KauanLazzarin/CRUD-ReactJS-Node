import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const NavigationLink = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-family: 'Work Sans';
    padding: 10px;
    border-radius: 10px;
    transition: 200ms;

    &:hover {
        background-color: #ffffff;
    }
`;

export default function Navigation ({ paths }) {
    return (
        <NavigationContainer>
            {
                paths.map((path) => {
                    return (
                        <NavigationLink>
                            <Link style={{"color": "var(--text-small)"}} to={path.href}>{path.name}</Link>
                        </NavigationLink>
                    )
                })
            }
        </NavigationContainer>
    )
};