import fs from "fs";
import path from "path";
import crypto from "crypto";

class UserManager {
    constructor() {
        const __filename = new URL(import.meta.url).pathname;
        this.filePath = path.join(path.dirname(__filename), 'files/users.json');

        this.users = [];
        this.loadUsers();
    }

    generateId() {
        const id = crypto.randomBytes(6).toString('hex');
        return id;
    }

    create(data) {
        const newUser = {
            id: this.generateId(),
            ...data,
        };

        this.users.push(newUser);
        this.saveUsers();
        return newUser;
    }

    read() {
        console.log("Reading all users:", this.users);
        return this.users;
    }

    readOne(id) {
        console.log("Reading user with ID:", id);
        return this.users.find(user => user.id === id);
    }

    destroy(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            this.saveUsers();
            return true; // Éxito en la eliminación
        } else {
            return false; // No se encontró el usuario
        }
    }

    loadUsers() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            this.users = JSON.parse(data);
        } catch (error) {
            console.error('Error loading users:', error.message);
            this.users = [];
        }
    }

    saveUsers() {
        try {
            const data = JSON.stringify(this.users, null, 2);
            fs.writeFileSync(this.filePath, data, 'utf8');
        } catch (error) {
            console.log('Error saving users to file:', error.message);
        }
    }
}

export default UserManager;


// <-------------------------------------------------------->
// import fs from 'fs';
// import path from 'path';
// import crypto from 'crypto';


// class UserManager {
//     constructor() {
//         this.filePath = path.join(__dirname, 'data', 'users.json');
//         this.loadUsers();
//     }

//     create(data) {
//         const user = {
//             id: this.generateId(),
//             name: data.name,
//             photo: data.photo,
//             email: data.email
//         };

//         this.users.push(user);
//         this.saveUsers();
//         return user;
//     }

//     read() {
//         return this.users;
//     }

//     readOne(id) {
//         return this.users.find(user => user.id === id);
//     }

//     loadUsers() {
//         try {
//             const data = fs.readFileSync(this.filePath, 'utf8');
//             this.users = JSON.parse(data);
//         } catch (error) {
//             this.users = [];
//         }
//     }

//     saveUsers() {
//         try {
//             const data = JSON.stringify(this.users, null, 2);
//             fs.writeFileSync(this.filePath, data, 'utf8');
//         } catch (error) {
//             console.log('Error saving users to file:', error.message);
//         }
//     }

//     generateId() {
//         const id = crypto.randomBytes(6).toString('hex'); 
//         return id;
//     }
// }

// const dataFolderPath = path.join(__dirname, 'data');
// if (!fs.existsSync(dataFolderPath)) {
//     fs.mkdirSync(dataFolderPath);
// }

// const productManager = new ProductManager();
// const userManager = new UserManager();

// const product1 = productManager.create({
//     title: 'Bomba de agua',
//     photo: 'link',
//     price: 34000,
//     stock: 10
// });

// const user1 = userManager.create({
//     name: 'PABLO GOMEZ',
//     photo: 'foto no',
//     email: 'pablo123@gmail.com'
// });

// console.log('Productos:', productManager.read());
// console.log('Usuarios:', userManager.read());
// console.log('Producto específico:', productManager.readOne(product1.id));
// console.log('Usuario específico:', userManager.readOne(user1.id));

// export default UserManager;