const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;
const peerServer = PeerServer({
  port: port,
  path: '/standblox',
  allow_discovery: false // Отключаем список всех пиров для безопасности
});

console.log(`PeerJS server running on port ${port}`);