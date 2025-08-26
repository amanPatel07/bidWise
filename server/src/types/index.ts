export interface RequestBody {
    [key: string]: any;
}

export interface ResponseData {
    success: boolean;
    message?: string;
    data?: any;
}

export interface ErrorResponse {
    success: boolean;
    message: string;
    error?: any;
}