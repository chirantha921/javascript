let userRole="admin";
let accessLevel;
let isLoggedIn=true;
let userMessage;
let userType="subscriber";
let userCategory;
let isAuthenticated=true;

// Check the access level
if(userRole==="admin"){
    accessLevel="Full access granted";

}else if(userRole=="manager"){
    accessLevel="Limited access granted";

}else{
    accessLevel="No access granted";
}
console.log("Access Level:", accessLevel);


// give welcome message

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="Welcome, Admin!";

    }else{
        userMessage="welcome, User!";
    }
} else{
        userMessage="Please log in to access the system";
}

// identify user catagory

switch(userType){
    case "Admin" :
        userCategory="Administrator"; break;

    case "manager":
        userCategory="Manager"; break;
        
    case "subscriber":   
        userCategory="subscriber";break;

    default:
            userCategory="Unknown";

}

let authonticationStatus=isAuthenticated?"Authenticated" :"Not authenticated";


console.log("User Message:", userMessage);
console.log("User Message:", accessLevel);
console.log("User category",userCategory);
console.log("Authentication Status:",authonticationStatus);