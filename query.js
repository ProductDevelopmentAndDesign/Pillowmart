import { connect } from './connect.js';

export const insertelement = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    

    try {
        await connect.query(
            `INSERT INTO login values( ? , ?)`, 
            [username,password]
        );
        
        // Redirect only after successful insertion
        
    } catch (error) {
        console.error("Error while inserting element:", error);
        res.status(500).send("Error occurred while inserting element.");
    }
};