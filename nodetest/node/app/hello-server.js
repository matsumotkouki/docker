//httpモジュールを読み込む
const http = require('http')
//Webサーバーを実行
const svr = http.createServer(hadler) //serverを生成
svr.listen(8081) //port8081番で待ち受け開始

//サーバーにアクセスがあった時の処理
function hadler (req, res){
    console.log('url:', req.url)
    console.log('method;', req.method)
    //httpヘッダーを出力
    res.writeHead(200, {'Content-Type': 'text/html'})
    //レスポンス本体を出力
    res.end('<h1>Hello, World!</h1>¥n')
}