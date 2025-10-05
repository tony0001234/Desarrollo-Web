export const users = [
    { name: "Anthony Ramirez", dpi: "1234567890123", email: "tony@gmail.com", password: "T0ny@123" }
];
// Funciones de validación
export function isValidDPI(dpi) {
    return /^\d{13}$/.test(dpi);
}

export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

export function userExists(dpi, email) {
    return users.some(
        user => user.dpi === dpi || user.email.toLowerCase() === email.toLowerCase());
}

//funciones auxiliares
export function getAllUsers() {
    return users;
}

//Buscar usuario por DPI
export function getUserByDPI(dpi) {
    return users.find(user => user.dpi === dpi);
}

//crear usuario
export function addUser(user) {
    users.push(user);
}

//actualizar usuario
export function updateUser(dpi, data) {
  const index = users.findIndex((u) => u.dpi === String(dpi));
  if (index === -1) return false;

  // Verificar si se quiere cambiar el DPI
  if (data.newDpi && data.newDpi !== users[index].dpi) {
    // Verificar que el nuevo DPI no exista
    const exists = users.some((u) => u.dpi === data.newDpi);
    if (exists) return "dpi_conflict";

    // Actualizar el DPI en el objeto
    users[index].dpi = String(data.newDpi);
  }

  // Filtrar campos válidos para evitar sobreescritura con undefined
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(
      ([key, value]) =>
        value !== undefined && value !== null && key !== "newDpi"
    )
  );

  users[index] = { ...users[index], ...filteredData };
  return true;
}


//eliminar usuario
export function deleteUser(dpi) {
  const index = users.findIndex((u) => u.dpi === dpi);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
}
