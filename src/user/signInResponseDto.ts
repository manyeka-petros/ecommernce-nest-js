export class SignInResponseDto {
    status: string;
    token: string;

    constructor(status: string, token: string) {
        this.status = status;
        this.token = token;
    }
}
