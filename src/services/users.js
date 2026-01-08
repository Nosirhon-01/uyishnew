import pool from "../database/config.js";

export const createUser = async (email, password) => {
    return pool.query(
        "INSERT INTO users(email,password) VALUES($1,$2) RETURNING id,email",
        [email, password]
    );
};

export const findUserByEmail = async (email) => {
    return pool.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
    );
};
