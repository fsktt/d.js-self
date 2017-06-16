const discord = require("discord.js");
const events  = require("./modules/event.js");

const client = new class Client extends discord.Client {
	constructor() {
		super({fetchAllMembers: true});

		this.events = new events(this);
		this.commands = new Map();

		this.on("ready", () => { this.events.ready(); })
		this.on("message", message => { this.events.message(message); })

		this.login(require("./config.json").token);
	}
}