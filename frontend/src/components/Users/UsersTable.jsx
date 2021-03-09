import React from 'react';
import styles from './table-style.module.css';

export default function UsersTable () {
    const [users, setUsers] = React.useState([]);

    async function fetchUsers () {
        try {
            const response = await fetch('http://localhost:3003/users');
            const usersData = await response.json();

            console.log(usersData)
            setUsers(usersData);
        } catch (error) {
            alert('Algo não hocorreu como esperado, tente novamente ou contate os adms');
        }
    };

    React.useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <table className={styles.userTable}>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Número de telefone</th>
                <th>Ações</th>
            </tr>
            {
                users.map((user) => {
                    return (
                        <>
                            <tr>
                                <td key={user.name}>{user.name}</td>
                                <td key={user.name}>{user.email}</td>
                                <td key={user.name}>{user.cpf}</td>
                                <td key={user.name}>{user.phoneNumber}</td>
                            </tr>
                        </>
                    )
                })
            }
        </table>

    )
}