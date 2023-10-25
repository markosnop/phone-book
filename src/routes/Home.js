import { useEffect, useState } from "react";
import personService from "../services/phonebook";
import { Link } from "react-router-dom";

function Home() {
  const [persons, setPersons] = useState([]);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [showForm, setShowForm] = useState (false)
const   [error,setError] = useState(null)
  useEffect(() => {
    fetchData();
  }, []);
 

 const fetchData = () => {
  personService.
  getAll()
  .then((response) => {
  setPersons(response.data);
  setShowForm (false)
 })
 .catch((error) => {
  if (error.response) {
    // O servidor respondeu com um status de erro
    console.error("Erro na requisição:", error.response);
  } else if (error.request) {
    // A requisição foi feita, mas não houve resposta do servidor
    console.error("Não foi possível se conectar ao servidor.");
    setError(
      "Não foi possível se conectar ao servidor. Verifique sua conexão de rede."
    );
  } else {
    // Algo aconteceu na configuração da requisição que causou o erro
    console.error("Erro na configuração da requisição:", error.message);
  }
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

const handleDelete = async (id) => {
  await personService.remove (id);
  fetchData();
}

  return (
    <div className="container">
      <h2>Home</h2>
<button on click={toggleForm} className="btn btn success">
  { showForm ? 'De volta ao formulario' : 'voltar para tabela' }
  
  </button>

{showForm ? (
      <form onSubmit={addPerson}className="bg-success-subtle p-2">
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome:
          </label>
          <input
          textLabel = "nome"
          text="Nome"
           placeholder="Digite seu nome"
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
      <div> 
        <hr />
        <table persons={persons} handleDelete= {handleDelete}/>
      </div>
)}
    </div>
  );
}

export default Home;
