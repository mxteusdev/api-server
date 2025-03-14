"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    static async createUser(req, res) {
        try {
            const { name, email } = req.body; // change infos here
            const user = await userService_1.default.createUser(name, email);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao criar usuário", error });
        }
    }
    static async getAllUsers(req, res) {
        try {
            const users = await userService_1.default.getUsers();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao buscar usuários", error });
        }
    }
}
exports.default = UserController;
