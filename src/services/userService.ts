import User from "../models/user";

class UserService {
    public static async createUser(name: string, email: string) {
        return await User.create({ name, email });
    }

    public static async getUsers() {
        return await User.findAll();
    }
}

export default UserService;
