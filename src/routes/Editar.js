import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import personService from "../services/phonebook";

function Editar() {
 const {id} = useParams();
 const navigate = useNavigate();
 const [nome,setNome] = useState("")
 const [numero,setNumero] = useState("")

 useEffect(() => {
  personService.getOne(id).then ((response) => {
    setNome(response.data.nome);
    setNumero(response.data.numero);
  })
  },[id])
 
  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };

  const editPerson = (event) => {
    event.preventDeFault()

    const personsObject = { 
      nome: nome,
      numero: numero,
    }
  }
 
  return (
      <div>
        <h2>Editar</h2>
      </div>
    );
  }
  
  export default Editar;