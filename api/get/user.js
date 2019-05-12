const userLogin = {
  path: "/user/login",
  template: (_, qurey) => {
    const list = require("../../public/userInfo/userList.json");
    let info = null;
    let { username, password } = qurey;
    for (let index in list) {
      let item = list[index];
      console.log(username, password, item, "77&&&");
      if (username == item.id && password == item.password) {
        info = { ...item };
        break;
      }
    }
    if (info) {
      return {
        data: { ...info },
        code: "000",
        mes: "成功"
      };
    } else {
      return { mes: "账户或密码错误", code: "203" };
    }
  }
};

module.exports = [userLogin];
