message.guild.members.map(member => {
	// console.log(member.user.username + "#" + member.user.discriminator);
	if (member.user.discriminator == "3783") {
		console.log(member.user.username + "#" + member.user.discriminator);
	}
});