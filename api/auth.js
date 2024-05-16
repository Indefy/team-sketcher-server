const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
	const { username, password } = req.body;

	try {
		const userExists = await User.findOne({ username });
		if (userExists) {
			return res.status(400).json({ message: "User already exists" });
		}

		const user = await User.create({ username, password });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "30d",
		});

		res.status(201).json({ token });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isMatch = await user.matchPassword(password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "30d",
		});

		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

module.exports = router;
