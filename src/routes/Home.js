import { useEffect, useState } from "react";
import personService from "../services/phonebook";

function Home() {
  const [persons, setPersons] = useState([]);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [showForm, setShowForm] = useState (false)

  useEffect(() => {
    fetchData();
  }, []);
 

 const fetchData = () => {
  personService.getAll().then((response) => {
    setPersons(response.data);
  
 }); 
 };

const addPerson = async (event) => {
  event.preventDefalt()
  const personObject = {
    nome : nome ,
    numero: numero,
  }
  await personService.create(personObject)

  setNome("")
  setNumero("")

  fetchData();

  console.log('button_clicked', event.target)
}


  const handleNomeChange = (event) => {
    // console.log(event.target.value);
    setNome(event.target.value);
  };

  const handleNumeroChange = (event) => {
    // console.log(event.target.value);
    setNumero(event.target.value);
  };

const toggleForm = () => {
  setShowForm(!showForm);
}

  return (
    <div className="container">
      <h2>Home</h2>
<button on click={toggleForm} className="btn btn success">
  { showForm ? 'De volta ao formulario' }
  
  </button>

{showForm ? (
      <form onSubmit={addPerson}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            placeholder="Digite o seu nome..."
            className="form-control"
            onChange={handleNomeChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">
            Telefone:
          </label>
          <input
            type="text"
            placeholder="Digite o seu telefone..."
            className="form-control"
            onChange={handleNumeroChange}
          />
          <button className="btn btn-success mt-4">Cadastrar</button>
        </div>
      </form>
) : (
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
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.nome}</td>
              <td>{person.numero}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
)}
    </div>
  );
}

export default Home;
