module.exports = class check {
	constructor(client) {
		this.client = client;
		this.name   = "prune";
		this.info   = "bulk delete x messages";
		this.args   = "";
	}

	async run(message, args) {
		var arg = message.content.split(" ").slice(1).join(" ");
		if (!arg) {
			console.error("specify amount to prune");
			return;
		}

		console.log(arg);

		message.channel.fetchMessages({limit: 100}).then(messages => {
	        let a = messages.array();
	        a = a.filter(m => m.author.id === require("../config.json").userid);
	        a.length = arg + 1;
	        a.map(m => m.delete().catch(console.error));
	    });
	}
}