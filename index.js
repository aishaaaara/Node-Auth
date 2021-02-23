const express = require("express")
const app = express()   

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./route/user")
app.use("/", user)

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai", auth, pegawai)

//import route pelanggaran
const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran", auth, pelanggaran)

//import route siswa
const siswa = require("./route/siswa")
app.use("/siswa", auth, siswa)


app.listen(2000, () => {

    console.log("Server run on port 2000");
})
