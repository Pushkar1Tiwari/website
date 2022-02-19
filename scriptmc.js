
// Minecraft players status
MinecraftAPI.getServerStatus(document.getElementById('server-ip').innerHTML, { port: 25565 }, (error, status) => {
    if (error) {
        return document.getElementById('server-status').innerHTML = 'Error Loading Status!';
    }
    document.getElementById('server-players').innerHTML = status.players.now;
});

