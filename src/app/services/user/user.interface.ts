export interface User {
    id?: number;
    email: string;
    username: string;
    confirmed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
}
