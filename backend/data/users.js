import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joe Bloggs',
    email: 'joe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Public',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
