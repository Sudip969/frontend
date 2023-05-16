export default {
  titleValid: [
    v => {
      return(v.length >= 3 || "Length must be 3 charcter");
    },
  ],
  nameInput:[
    v=>{
      return(v.length >=2 || "Name must be provided")
    }
  ],
  emailInput:[
    v=>{
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return(pattern.test(v)|| "Invalid Email")
    }
  ],
  password:[
    v=>{
      const pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return (pattern.test(v) || "Min 8 characters with at least one capital letter, a number and a special character")
    }
  ]
};
