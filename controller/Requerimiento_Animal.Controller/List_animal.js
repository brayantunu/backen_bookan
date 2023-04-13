const modelRequerimientos_animales = require("../../models/AnimalesRequiridos.Model/animales.model");
const estructuraApi = require("../../helpers/estructuraApi");
const { Pool } = require("pg");
const db = require("../../env");

const pool = new Pool(db);


exports.listR_animales = async (req, res) => {
  const api = new estructuraApi();
  const req_animales = await modelRequerimientos_animales.findAll();
  if (req_animales.length > 0) {
    api.setResultado(req_animales);
  } else {
    api.setEstado(404, "ERROR", "No encontrado");
  }
  res.json(api.toResponse());
};

exports.especieForEstado = async (req, res) => {
  let estructuraapi = new estructuraApi();
  const especie_id = req.params.especie_id;
  const especieporreq = await pool.query(`SELECT 
      *
      FROM requerimientos_animales
      JOIN especies
      ON especies.id_especie = requerimientos_animales.especie_id
      WHERE requerimientos_animales.especie_id = ${especie_id}`);
  // console.log(asignaciones.rows);
  if (especieporreq.rows.length > 0) {
    estructuraapi.setResultado(especieporreq.rows);
  } else {
    estructuraapi.setEstado(404, "error", "No encontrado!");
  }
  res.json(estructuraapi.toResponse());
};
