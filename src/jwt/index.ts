import jwt from 'jsonwebtoken'

export enum IUserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User'
}

export interface IJWTToken {
  id: string,
  authType: string,
  role: IUserRole,
  name: string,
  image: string,
  iat: number,
  exp: number,
  iss: string,
  sub: string
}

class JWTBuilder {
  private readonly issuer: string
  private readonly privkey: any
  private readonly publkey: any
  private readonly subject: string
  private readonly algorithm: 'RS256'
  private readonly maxAge: number|string

  constructor (options: {
    issuer: string,
    key: {
      public: string,
      private: string
    },
    subject: string,
    maxAge: number|string
  }) {
    this.issuer = options.issuer
    this.privkey = options.key.private
    this.publkey = options.key.public
    this.subject = options.subject
    this.maxAge = options.maxAge
    this.algorithm = 'RS256'
  }

  async createToken (payload: object): Promise<string> {
    const options = {
      algorithm: this.algorithm,
      expiresIn: this.maxAge,
      issuer: this.issuer,
      subject: this.subject
    }
    const result = await this._createJWT(payload, this.privkey, options)
    return result
  }

  async verifyToken (token: string): Promise<IJWTToken|undefined> {
    const options = {
      algorithm: this.algorithm,
      issuer: this.issuer,
      subject: this.subject,
      maxAge: this.maxAge
    }
    const result = await this._verifyJWT(token, this.publkey, options)
    return result
  }

  private _createJWT (payload: object, secret: any, options: object): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (error, token) => {
        if (error) reject(error)
        else resolve(token)
      })
    })
  }

  private _verifyJWT (token: string, secret: any, options: object): Promise<IJWTToken|undefined> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, options, (error, decoded) => {
        if (error) reject(error)
        else resolve(decoded as IJWTToken)
      })
    })
  }
}

export default JWTBuilder
