import { Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
    public static async createUser(req: Request, res: Response): Promise<void> {
        try {
            const {name, email} = req.body; // change infos here
            const user = await UserService.createUser(name, email);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar usuário", error });
        }
    }

    public static async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({  message: "Erro ao buscar usuários", error });
        }
    }
}

export default UserController;

