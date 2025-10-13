import { users } from '../data/users.js';

export function getUsers(req, res) {
    res.json(users);
}

export function updateUser(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find(u => u.id === parseInt(id));

    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    user.name = name || user.name;
    user.email = email || user.email;

    res.json({ message: 'Usuario actualizado', user });
}

export function deleteUser(req, res) {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === parseInt(id));

    if (index === -1) return res.status(404).json({ message: 'Usuario no encontrado' });

    users.splice(index, 1);
    res.json({ message: 'Usuario eliminado correctamente' });
}