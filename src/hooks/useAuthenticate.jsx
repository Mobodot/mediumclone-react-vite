import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuthenticate(initObj, apiUrl) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initObj);

  const [backendErrors, setBackendErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const authenticate = async (url) => {
    // const url = "http://localhost:3000/api/users";
    // const url = "https://api.realworld.io/api/users";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ user: formData }),
    });

    const data = await response.json();
    console.log("response data: ", data);
    console.log("response data errors: ", data.errors);
    if (data.errors) {
      setBackendErrors(data.errors);
      return;
    }
    navigate("/");
    // return data;
  };

  const convertErrorToStrArr = (errors) => {
    let result = [];
    for (const key in errors) {
      result.push(`${key}: ${errors[key]}`);
    }
    console.log("result: ", result);
    return result;
  };

  const handleSubmit = (e) => {
    console.log("the apiUrl is ", apiUrl);
    e.preventDefault();
    authenticate(apiUrl);
    // setFormData({ username: "", email: "", password: "" });
  };

  return {
    formData,
    handleChange,
    convertErrorToStrArr,
    handleSubmit,
    backendErrors,
  };
}
