import {users, isValidDPI, isValidEmail, isValidPassword, userExists, getUserByDPI, addUser, updateUser, deleteUser, getAllUsers} from '../models/userModel.js';

export function createUser(req, res) {
    const {name, dpi, email, password} = req.body;

    //valida los campos
    if (!name || !dpi || !email || !password) {
        return res.status(400).json({error: 'Todos los campos son obligatorios'});
    }
    if (!isValidDPI(dpi)) {
        return res.status(400).json({error: 'DPI inválido. Debe tener 13 dígitos numéricos.'});
    }
    if (!isValidEmail(email)) {
        return res.status(400).json({error: 'Email inválido.'});
    }
    if (!isValidPassword(password)) {
        return res.status(400).json({error: 'La contraseña debe tener al menos 8 caracteres.'});
    }
    if (userExists(dpi, email)) {
        return res.status(409).json({error: 'El DPI o email ya existe.'});
    }
    //crear usuario y guardar
    addUser({name, dpi, email, password});

    res.status(201).json({message: 'Usuario creado exitosamente'});
}

export function getUsers(req, res) {
    const {name, email, limit, offset} = req.query;

    let filteredUsers = users.map(({password, ...user}) => user); // Exclude passwords

    if (name) {
        filteredUsers = filteredUsers.filter((u) => u.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (email) {
        filteredUsers = filteredUsers.filter((u) => u.email.toLowerCase() === email.toLowerCase());
    }   

    const start = offset ? parseInt(offset) : 0;
    const end = limit ? start + parseInt(limit) : filteredUsers.length;

    res.status(200).json(filteredUsers.slice(start, end));
}

export function updateUserContorller(req, res) {
    const {dpi} = req.params;
    const {name, newDpi, email, password} = req.body;

    const existingUser = getUserByDPI(dpi);
    if (!existingUser) {
        return res.status(404).json({error: 'Usuario no encontrado'});
    }

    //validar nuevo DPI si se cambia 
    if (newDpi && newDpi !== dpi) {
        if (!isValidDPI(newDpi)) {
            return res.status(400).json({error: 'DPI inválido. Debe tener 13 dígitos numéricos.'});
        }
        if (users.some(user => user.dpi === newDpi)) {
            return res.status(409).json({error: 'El nuevo DPI ya existe.'});
        }
    }
    //validar email si se cambia
    if (email && !isValidEmail(email)) {
        return res.status(400).json({error: 'Email inválido.'});
    }
    if (email && users.some(user => user.email === email && user.dpi !== dpi)) {
        return res.status(409).json({error: 'El email ya existe.'});
    }

    //validar nuevo password si se cambia
    if (password && !isValidPassword(password)) {
        return res.status(400).json({error: 'La contraseña debe tener al menos 8 caracteres.'});
    }

    // Actualizar usuario
    const result = updateUser(dpi, { name, newDpi, email, password });
    
    if (result === "dpi_conflict") {
        return res.status(409).json({ error: "El nuevo DPI ya está registrado en otro usuario." });
    }

    if (!result) {
        return res.status(500).json({ error: "Error al actualizar el usuario." });
    }

    res.status(200).json({ message: "Usuario actualizado correctamente." });
}

export function deleteUserController(req, res) {
  const { dpi } = req.params;
  const existingUser = getUserByDPI(dpi);

  if (!existingUser) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const deleted = deleteUser(dpi);
  if (deleted) {
    return res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } else {
    return res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
}
