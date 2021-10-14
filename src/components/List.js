import React, { useContext, useEffect } from "react";
import { mainContext } from "../contexts/MainContext";
import {Link} from "react-router-dom";

const List = () => {
  const { getTodos, todos, deleteTask } = useContext(mainContext);
  console.log(todos);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos ? (
        <ul>
          {todos.map((item) => (
            <li key={item.todo.id}>
              {item.todo.title} <button onClick={() => deleteTask(item.docId)}>Del</button>
              <Link to ={`/update/${item.docId}`}>
                <button>EDIT</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default List;
