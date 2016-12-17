
 var addmessage = { method: 'POST',
    url: 'http://postgresapi:3000/addmessage',
    headers:
     { 'cache-control': 'no-cache',
       'content-type': 'application/json' },
    body: { user_id: user_id, message: message },
    json: true };



  module.exports ={
    addmessage
  }
