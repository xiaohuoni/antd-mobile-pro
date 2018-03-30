const config = require("../src/utils/config");

const { apiPrefix } = config;
module.exports = {
  [`GET ${apiPrefix}/authtestQuery200`](req, res) {
    res.status(200).json({ success: true, message: "这是模拟有效响应！" });
  },
  [`GET ${apiPrefix}/authtestQuery401`](req, res) {
    res.status(401).json({ success: true, message: "这是模拟验证未通过！" });
  },
  [`GET ${apiPrefix}/authtestQuery403`](req, res) {
    res.status(403).json({ success: true, message: "这是模拟未验证！" });
  }
};
