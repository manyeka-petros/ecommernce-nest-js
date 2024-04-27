export declare class ApiResponse {
    readonly success: boolean;
    readonly message: string;
    constructor(success: boolean, message: string);
    getTimestamp(): string;
}
