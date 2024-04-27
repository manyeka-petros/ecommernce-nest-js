export declare class CustomException extends Error {
    constructor(message?: string);
    serializeErrors(): {
        message: string;
    };
}
