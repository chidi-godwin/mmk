export interface InboundSms {
    from: string;
    to: string;
    text: string;
}

export interface InboundResponse {
    message: string; 
    error: string;
}