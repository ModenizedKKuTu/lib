export declare enum IUserRole {
    Admin = "Admin",
    Moderator = "Moderator",
    User = "User"
}
export interface IJWTToken {
    id: string;
    authType: string;
    role: IUserRole;
    name: string;
    image: string;
    iat: number;
    exp: number;
    iss: string;
    sub: string;
}
declare class JWTBuilder {
    private readonly issuer;
    private readonly privkey;
    private readonly publkey;
    private readonly subject;
    private readonly algorithm;
    private readonly maxAge;
    constructor(options: {
        issuer: string;
        key: {
            public: string;
            private: string;
        };
        subject: string;
        maxAge: number | string;
    });
    createToken(payload: object): Promise<string>;
    verifyToken(token: string): Promise<IJWTToken | undefined>;
    private _createJWT;
    private _verifyJWT;
}
export default JWTBuilder;
