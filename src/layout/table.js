import { link } from "react-router-dom"

function  table(persons, handleDelete){
    return(
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={index + 1}>
              <td>{person.id}</td>
              <td>{person.nome}</td>
              <td>{person.numero}</td>
              <td> 
              <Link to = {"/${persons.id}"} className= "btn btn-success">
                <i class="bi bi-pencil"></i>Editar
                </Link>
              <button className= "btn btn-danger mx-2">
                onClick={() => handleDelete (persons.id)}
              <i class="bi bi-trash3"></i>Excluir
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}
export default table;