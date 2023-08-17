import bcrypt from 'bcryptjs';


const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'afnan',
        email: 'afnan@example.com',
        password: bcrypt.hashSync('123456', 10),
      },
      {
        name: 'alomgir',
        email: 'alomgir@example.com',
        password: bcrypt.hashSync('123456', 10),
      },
    
];

export default users;