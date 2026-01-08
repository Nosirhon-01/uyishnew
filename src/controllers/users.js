import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../services/usrers.js";

export const register = async (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(email, hashedPassword);

    res.status(201).json({
        message: "Registered",
        user: user.rows[0],
    });
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    const result = await findUserByEmail(email);

    if (result.rows.length === 0) {
        return res.status(400).json({
            message: "User topilmadi",
        });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            message: "Password noto‘g‘ri",
        });
    }
]
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET
    );

    res.json({
        message: "Login success",
        token,
    });
};
