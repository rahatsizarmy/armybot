module.exports = member => {
    let username = member.user.username;
    member.guild.defaultChannel.send('hg '+username+'');
};
