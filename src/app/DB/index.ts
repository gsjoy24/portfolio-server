import config from '../config';
import { Admin } from '../modules/Admin/admin.model';

const superAdmin = {
  name: {
    firstName: 'Faruk',
    lastName: 'Rahman',
  },
  email: config.super_admin_email,
  password: config.super_admin_password,
  gender: 'Male',
  dateOfBirth: '1998-05-05',
  contactNo: '+8801914290302',
  presentAddress: 'Dhaka, Bangladesh',
  permanentAddress: 'Dhaka, Bangladesh',
  profileImg: 'https://i.ibb.co/bghqR1x/Spanish.png',
};

const seedSuperAdmin = async () => {
  const isSuperAdminExists = await Admin.findOne({
    email: config.super_admin_email,
  });
  if (!isSuperAdminExists) {
    await Admin.create(superAdmin);
  }
};

export default seedSuperAdmin;
