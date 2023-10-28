import React from "react";

function FormularioEdicao({ nome, numero, onNomeChange, onNumeroChange, onEditar }) {
  return (
    <form onSubmit={onEditar}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome:
        </label>
        <input
          type="text"
          className="form-control"
          defaultValue={nome}  // Usar defaultValue em vez de value
          onChange={onNomeChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="numero" className="form-label">
          Número:
        </label>
        <input
          type="text"
          className="form-control"
          defaultValue={numero}  // Usar defaultValue em vez de value
          onChange={onNumeroChange}
        />
        <button className="btn btn-secondary mt-4">Editar</button>
      </div>
    </form>
  );
}

export default FormularioEdicao;
