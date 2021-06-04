export interface AuthUser {
    identifier: string;
    password: string;
}

export interface JwthUser {
    jwt: string;
    user: User;
}

export interface User {
    id?: number;
    email: string;
    username: string;
    confirmed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
}

export interface RegisterUser extends User {
    password: string;
}
