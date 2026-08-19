import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const emailMatches =
      email.toLowerCase() === process.env.ADMIN_EMAIL.toLowerCase();

    if (!emailMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    /*
      For a production system, store a bcrypt hash
      in an environment variable instead of a plain
      password.

      This temporary comparison is replaced below
      with bcrypt.
    */

    const passwordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!passwordHash) {
      return res.status(500).json({
        success: false,
        message: "Admin password hash is not configured.",
      });
    }

    const passwordMatches = await bcrypt.compare(password, passwordHash);

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    const token = jwt.sign(
      {
        email: process.env.ADMIN_EMAIL,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      },
    );

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "Login successful.",
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to login.",
    });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("adminToken");

  res.json({
    success: true,
    message: "Logged out.",
  });
});

router.get("/me", (req, res) => {
  const token = req.cookies?.adminToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      authenticated: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.json({
      success: true,
      authenticated: true,
      admin: decoded,
    });
  } catch {
    return res.status(401).json({
      success: false,
      authenticated: false,
    });
  }
});

export default router;
