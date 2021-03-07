import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const NavigationLink = styled.p`
    font-size: 18px;
    font-weight: 500;
    font-family: 'Work Sans';
    color: var(--text-small);
`;

export default function Navigation ({ paths }) {
    return (
        <NavigationContainer>
            {
                paths.map((path) => {
                    return (
                        <NavigationLink>
                            <Link to={path.href}>{path.name}</Link>
                        </NavigationLink>
                    )
                })
            }
        </NavigationContainer>
    )
};