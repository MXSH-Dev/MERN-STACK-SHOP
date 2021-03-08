export default interface UserInformation {
  _id?: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
  password?: string;
}
