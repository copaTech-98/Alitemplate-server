const encodeToken = async (req, res) => {
  console.log("CRYPT/ENCODEMIDDLEWARE", "RUTA DE PRUEBA ");
  return res.status(200).json({ status: "success", message: "Ruta de prueba" });
};
module.exports = { encodeToken };
