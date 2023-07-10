import axios from 'axios';
import { useEffect, useState } from "react";



const Tarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const requestTarefas = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(response.data);
            setTarefas(response.data);
        }catch(error) {
            console.warn(error);
        }
    }

    useEffect(() => {
        requestTarefas();
    }, []);
    return(
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Concluida</th>
                </tr>
            </thead>
            <tbody>
               {
                tarefas.map((tarefa, index) => {
                    return (
                    <tr key={index}>
                        <td>{tarefa.id}</td>
                        <td>{tarefa.title}</td>
                        <td>{tarefa.completed ? 'Sim' : 'Não'}</td>    
                    </tr>
                    )
                })
               }
            </tbody>
        </table>
    )
}

export default Tarefas;