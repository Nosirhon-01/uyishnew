import { Router } from "express";
import { register, login } from "../controlllers/users.js";
import validate from "../middleware/validatoins.js";
import { registerSchema, loginSchema } from "../utils/validations.js";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;
