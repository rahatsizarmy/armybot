module.exports = member => {
    let username = member.user.username;
    client.channel.get('427440296154890260').member.send('Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
