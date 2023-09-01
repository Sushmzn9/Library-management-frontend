import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { CustomInput } from "../../components/custom-input/Custominput";

const Profile = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [Form, setForm] = useState({});
  useEffect(() => {
    setForm(user);
  }, [user]);

  console.log(Form);
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "sam",
      type: "text",
      value: Form.fName.toUpperCase(),
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "smith",
      type: "text",
      value: Form.lName.toUpperCase(),
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "6789678",
      type: "number",
      value: Form.phone,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "10/67 george st sydney",
      type: "text",
      value: Form.address,
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "sam.smith@gmail.com",
      type: "email",
      value: Form.email,
    },
  ];

  return (
    <div>
      <UserLayout title="Profile">
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}
      </UserLayout>
    </div>
  );
};
export default Profile;
