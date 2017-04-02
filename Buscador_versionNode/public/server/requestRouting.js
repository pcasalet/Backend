var dispatcher = require('httpdispatcher')

// Routing usando httpdispatcher
function handleRequest(req, res) {

  // Get Users
  dispatcher.onGet('/users', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'} )
    res.end('Estas en el modulo de usuarios')
  })

  // Get Admin
  dispatcher.onGet('/admin', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'} )
    res.end('Estas en el modulo de Administradores')
  })

  // Get Dashboard
  dispatcher.onGet('/dashboard', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'} )
    res.end('Estas en el dashboard')
  })

  // Error
  dispatcher.onError(function(req, res) {
    res.writeHead(400)
    res.end('No se encontro el recurso solicitado')
  })

  dispatcher.dispatch(req, res)
}

module.exports = handleRequest
