import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    try {
      const user = await this.userService.user({
        where: { username },
      });
      
      if (!user) {
        return null;
      }

      const isPasswordValid = await this.passwordService.compare(password, user.password);
      if (!isPasswordValid) {
        return null;
      }

      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList };
    } catch (error) {
      return null;
    }
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    try {
      const { username, password } = credentials;
      
      const validatedUser = await this.validateUser(username, password);
      if (!validatedUser) {
        throw new UnauthorizedException("The passed credentials are incorrect");
      }

      const accessToken = await this.tokenService.createToken({
        id: validatedUser.id,
        username,
        password,
      });

      return {
        accessToken,
        ...validatedUser,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException("Authentication failed");
    }
  }
}
