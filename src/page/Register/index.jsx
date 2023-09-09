import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Col, Row } from "antd";

const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập tên đăng nhập"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  repassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Vui lòng xác nhận mật khẩu"),
  fullName: yup.string().required("Vui lòng nhập họ và tên"),
  age: yup
    .number()
    .typeError("Vui lòng nhập số tuổi")
    .positive("Tuổi phải lớn hơn 0")
    .required("Vui lòng nhập tuổi"),
});

function RegistrationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Xử lý dữ liệu đăng ký ở đây, ví dụ gửi đến API
    console.log(data);
  };

  return (
    <Row align={"center "}>
      <Col className="authem_form pdbt20" span={10}>
        <h2>Đăng Ký </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input {...field} type="text" placeholder="Tên đăng nhập" />
              )}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input {...field} type="text" placeholder="Email" />
              )}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input {...field} type="password" placeholder="Mật khẩu" />
              )}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div>
            <Controller
              name="repassword"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                />
              )}
            />
            <p>{errors.repassword?.message}</p>
          </div>
          <div>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input {...field} type="text" placeholder="Họ và tên" />
              )}
            />
            <p>{errors.fullName?.message}</p>
          </div>
          <div>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <input {...field} type="text" placeholder="Tuổi" />
              )}
            />
            <p>{errors.age?.message}</p>
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </Col>
    </Row>
  );
}

export default RegistrationForm;
