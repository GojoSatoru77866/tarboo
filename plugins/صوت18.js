let handler = async (m, { conn }) => {

    const vn = './media/جود_كير.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `جود_كير.mp3`}, {quoted: m});
};

// دي كلمات المساعدة والأوسمة الخاصة بالأمر
handler.help = ['notification'];
handler.tags = ['notification'];

// دي الكلمات اللي الكود هيتفاعل معاها
handler.customPrefix = /كود كير|حفاظة|بمبز|لبسو حفاظة|لبسو كود كير/i;
handler.command = new RegExp;

export default handler;