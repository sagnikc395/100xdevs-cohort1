//generate tokens for logged in users and pass the secret
//Note: please generate your own secret to make this secure
import jwt from "jsonwebtoken";
const SECRET = "AD123@%a_l";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    //authorization and tokens generate 
    const token = authHeader.split(' ')[1];
    jwt.verify(token,SECRET,(err,user) => {
        if(err) {
            //invalid tokens 
            return res.sendStatus(403);
        } 
        //validate 
        req.user = user;
        next();//ACCESS granted !
    })
  } else {
    //uanuthoized , can't access
    res.sendStatus(401);
  }
};

export { authenticateJWT, SECRET };
