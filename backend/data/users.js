import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sophie",
    email: "sophine@hong.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "MXSH",
    email: "mxsh@dev.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
