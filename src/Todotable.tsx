import { Todo } from './interfaces'

/*
export default function Todotable(props: Todos) {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map(({description, date, priority}: Todo, index: number) =>
                        <tr key={index}>
                            <td>{description}</td>
                            <td>{date}</td>
                            <td>{priority}</td>
                            <td><button onClick={() => props.removeTodo(index)}>Del</button></td>
                        </tr>   
                    )}
                </tbody>
            </table>
        </div>
    );
}
*/