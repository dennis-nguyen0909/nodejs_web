const express = require('express'); // nạp thư viện vào
const app = express() // khởi tạo ra function do function này đã đc tạo rồi nên chỉ cần call lại
const port = 3000 // định nghĩa muốn run ở cổng nào

// định nghĩa route : tuyến đường
app.get('/tin-tuc', (req, res) => {
    res.send('Hello World!222')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})