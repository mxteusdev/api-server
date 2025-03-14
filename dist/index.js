"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./config/server"));
const database_1 = __importDefault(require("./config/database"));
const PORT = process.env.PORT || 8080;
server_1.default.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await database_1.default.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
