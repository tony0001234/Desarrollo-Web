export function validateFields(fields) {
  return (req, res, next) => {
    for (const f of fields) {
      if (!req.body[f]) {
        return res.status(400).json({ message: `El campo ${f} es obligatorio` });
      }
    }
    next();
  };
}
