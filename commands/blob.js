module.exports = class check {
	constructor(client) {
		this.client = client;
		this.name   = "blob";
		this.info   = "send a blob";
		this.args   = "";
	}

	async run(message, args) {
		var arg = message.content.split(" ").slice(1).join(" ");

		message.delete();
		message.channel.sendFile(`./blobs/${arg}.png`);
	}
}