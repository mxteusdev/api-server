"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserService {
    static async createUser(name, email) {
        return await user_1.default.create({ name, email });
    }
    static async getUsers() {
        return await user_1.default.findAll();
    }
}
exports.default = UserService;
