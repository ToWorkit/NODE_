module.exports = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Koa Server HTML</title>
      <link href="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js"></script>
      <script src="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.js"></script>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-8"> 
            <h1>Hello <%= you %></h1>
            <p>This is Scott <%= me %></p>
          </div>
          <div class="col-md-4">
            <p>测试</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`
