// ""                    _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~""

const { server } = require("./src/App.js");
require("dotenv").config();
const { PORT, HOST } = process.env;
const socket = require("./src/Socket/index.js");
const { conn } = require("./src/db.js");
require("./src/db.js");
socket();

server.listen(PORT, HOST, async () => {
  try {
    conn
      .sync({ alter: true })
      .then(async (response) => {
        console.log("./index.js", `✡ Servidor corriendo en ${HOST}:${PORT}`);
      })

      .catch((e) => {
        console.log(e.message);
      });
  } catch (e) {
    console.log("Error!!", e.message);
  }
});
