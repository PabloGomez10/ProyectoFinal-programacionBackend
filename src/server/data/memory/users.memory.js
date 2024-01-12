import fs from fs;

class UserManager {
    constructor() {
      this.users = []; 
      this.lastid = 0;    
    }
  
    create(name, photo, email) {
      const id = this.lastid++; 
      const user = { id, name, photo, email };
      this.users.push(user);
      return user;
    }
    read(){
        return this.users;
    }
    
  readOne(id){
    return this.users.find(user =>{
       return user.id === id ;
    })
}
}

const users = new UserManager();

const user1 = users.create("PABLO GOMEZ", "foto no","pablo123@gmail.com" );
const user2 = users.create("JULIAN MENDOZA", "foto no","JULIAN321@GMAIL.COM" );

const userFind = users.readOne(0);

console.log(userFind)