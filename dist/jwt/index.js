"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUserRole = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var IUserRole;
(function (IUserRole) {
    IUserRole["Admin"] = "Admin";
    IUserRole["Moderator"] = "Moderator";
    IUserRole["User"] = "User";
})(IUserRole = exports.IUserRole || (exports.IUserRole = {}));
class JWTBuilder {
    constructor(options) {
        this.issuer = options.issuer;
        this.privkey = options.key.private;
        this.publkey = options.key.public;
        this.subject = options.subject;
        this.maxAge = options.maxAge;
        this.algorithm = 'RS256';
    }
    async createToken(payload) {
        const options = {
            algorithm: this.algorithm,
            expiresIn: this.maxAge,
            issuer: this.issuer,
            subject: this.subject
        };
        const result = await this._createJWT(payload, this.privkey, options);
        return result;
    }
    async verifyToken(token) {
        const options = {
            algorithm: this.algorithm,
            issuer: this.issuer,
            subject: this.subject,
            maxAge: this.maxAge
        };
        const result = await this._verifyJWT(token, this.publkey, options);
        return result;
    }
    _createJWT(payload, secret, options) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.sign(payload, secret, options, (error, token) => {
                if (error)
                    reject(error);
                else
                    resolve(token);
            });
        });
    }
    _verifyJWT(token, secret, options) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, secret, options, (error, decoded) => {
                if (error)
                    reject(error);
                else
                    resolve(decoded);
            });
        });
    }
}
exports.default = JWTBuilder;
