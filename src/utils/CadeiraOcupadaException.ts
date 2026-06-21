export class CadeiraOcupadaException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CadeiraOcupadaException";
    }
}