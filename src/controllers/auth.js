export const login = (req, res) => {
    const { email, password } = req.body;
    console.log("login", email, password);
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        res.status(200).json({ message: "User logged in successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const register = (req, res) => {
    const user = { username, email, password, hobbies, usertype } = req.body;
    console.log("register", username, email, password, hobbies, usertype);
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const logout = (req, res) => {
    const { userId } = req.body;
    console.log("logout", userId);
    try {
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const porfile = (req, res) => {
    const { userId } = req.params;
    console.log("profile", userId);
    try {
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        res.status(200).json({ message: "User profile fetched successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const update = (req, res) => {
    const { userId } = req.params;
    const updates = req.body;
    console.log("update", userId, updates);
    try {
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }   
        res.status(200).json({ message: "User profile updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};