module.exports = function(req, res, next) {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("Access denied. No token Provided.");
    try {
        
    } catch (ex) {
        res.status(400).send("Invalid Token.");
    }
};
