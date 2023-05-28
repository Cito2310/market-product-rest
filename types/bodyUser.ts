export interface BodyCreateUser {
    _id?: string;
    password: string;
    username: string;
}

export interface BodyLoginUser {
    password: string;
    username: string;
}
