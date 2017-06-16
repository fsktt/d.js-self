module.exports = class check {
	constructor(client) {
		this.client = client;
		this.name   = "check";
		this.info   = "check disc";
		this.args   = "";
	}

	async run(message, args) {
		var arg = message.content.split(" ").slice(1).join(" ");

		console.log("-")

		message.guild.members.map(member => {
			if (member.user.discriminator == arg) {
				console.log(member.user.username + "#" + member.user.discriminator);
			}
		});
	}
}