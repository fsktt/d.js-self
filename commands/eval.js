module.exports = class Eval {
	constructor(client) {
		this.client = client;
		this.name   = "eval";
		this.info   = "evaluate js";
		this.args   = "";
	}

	async run(message, args) {
		var arg = message.content.split(" ").slice(1).join(" ");
		
		try {
			message.edit("?eval ``" + arg + "``\n**``OUTPUT:``**" + eval(arg));
		} catch(err) {
			message.edit("?eval ``" + arg + "``\n**``ERROR:``**" + err);
		}
	}
}