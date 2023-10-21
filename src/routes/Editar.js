import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import personService from "../services/phonebook";
import axios from "axios";

function Editar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  useEffect(() => {
    personService.getOne(id).then((response) => {
      setNome(response.data.nome);
      setNumero(response.data.numero);
    });
  }, [id]);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };

  const editPerson = async (event) => {
    event.preventDeFault();

    const personsObject = {
      nome: nome,
      numero: numero,
    };

    await personService.update(id, personsObject);

    navigate("/");
  };

  return (
    <div className="container">
      <h2>Edição de dados</h2>
      <form onSubmit={editPerson}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleNomeChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numero" className="form-label">
            numero:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleNomeChange}
          />
          <button className="btn btn-danger mx-4">Editar</button>
        </div>
      </form>
    </div>
  );
}
export default Editar;
