import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập email"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});
const datas = {
  username: "aaaa",
  password: "bbbb",
};
function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, datas.username);
    if (data.username === datas.username && data.password === datas.password) {
      alert("Đăng Nhập Thành Công");
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  };

  return (
    <Row align={"center "}>
      <Col className="authem_form pdbt20" span={10}>
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input {...field} type="text" placeholder="Tên Đăng Nhập" />
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
          <button type="submit">Đăng nhập</button>
          <Link style={{ textAlign: "right" }} to="/register">
            {" "}
            Đăng Ký
          </Link>
        </form>
      </Col>
    </Row>
  );
}

export default LoginForm;
