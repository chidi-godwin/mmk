export interface Sms {
    from: string;
    to: string;
    text: string;
}

export interface ServiceResponse {
    message: string; 
    error: string;
}