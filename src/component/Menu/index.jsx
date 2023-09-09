import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <ul>
      <li className="display-inline" key={1}>
        {" "}
        PHIM LẺ
      </li>
      <li className="display-inline" key={2}>
        {" "}
        PHIM BỘ
      </li>
      <li className="display-inline" key={3}>
        {" "}
        PHIM CHIẾU RẠP
      </li>
      <li className="display-inline" key={4}>
        {" "}
        THỂ LOẠI
      </li>
      <li className="display-inline" key={5}>
        {" "}
        QUỐC GIA
      </li>
      <li className="display-inline" key={6}>
        <Link to="/register">ĐĂNG NHẬP</Link>
      </li>
      <li className="display-inline" key={7}>
        <Link to="/login">ĐĂNG KÝ</Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;
