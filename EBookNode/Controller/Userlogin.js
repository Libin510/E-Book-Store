

const URegister=require("../Schema/Userregi")
const bcrypt=require("bcrypt");



const login = async (req, res) => {
    
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
     
      const userd = await URegister.findOne({ email });
      console.log(userd);
  
      if (!userd) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      
      const passwordMatch = await bcrypt.compare(password, userd.password);
  
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
    
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
 
};


module.exports = login ;
