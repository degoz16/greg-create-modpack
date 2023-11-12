PlayerEvents.loggedIn(event => {
    if (!event.player.persistentData.first_login) {
    	event.player.persistentData.first_login = false;
    	event.server.runCommandSilent(`/effect give ${event.player.name.string} cold_sweat:grace 1200 1`);
    }
});
