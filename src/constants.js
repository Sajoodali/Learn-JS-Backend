export const DB_NAME = "DataBase"



export const login = (req, res) => { {
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