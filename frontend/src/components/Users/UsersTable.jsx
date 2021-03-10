import React from 'react';
import DeleteButton from './DeleteButton';
import { EditButton } from './EditButton';
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

    function editHandler (userId) {
        localStorage.setItem('user_key', JSON.stringify(userId));
        window.location = '/edit';
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
                                <td key={user.email}>{user.email}</td>
                                <td key={user.cpf}>{user.cpf}</td>
                                <td key={user.phoneNumber}>{user.phoneNumber}</td>
                                <td key={user._id}>
                                    <DeleteButton productId={user._id} />
                                    <EditButton onClick={() => editHandler(user._id)}>
                                        <i className="material-icons">edit</i>
                                    </EditButton>
                                </td>
                            </tr>
                        </>
                    )
                })
            }
        </table>

    )
}