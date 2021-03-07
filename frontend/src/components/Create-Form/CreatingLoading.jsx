import styled from 'styled-components';

export const Rotating = styled.div`
    margin-top: 3vh;
    width: 90px;
    height: 90px;
    border-radius: 10px;
    border: 4px solid blue;
    animation: rotateLoading 2s;
    animation-iteration-count: infinite;

    @keyframes rotateLoading {
        to {
            border: 4px solid #e01a00;
            transform: rotate(360deg);
        }
    }
`;

// export default function CreatingLoading () {
//     return (
//         <Box>
//             <Rotating />
//         </Box>
//     )
// }