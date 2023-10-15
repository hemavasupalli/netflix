export const  ValidData  =(email , password )=>{
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //const isNameValid= /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    //if(!isNameValid) return "Name is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    if(!isEmailValid) return "Email is not Valid";

    return null
}