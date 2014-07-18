var content = {
    logo: $('#logo'),
    social: $('#social')
};

content.logo.css({
    display: 'block',
    top: '-100%'
}).velocity({
    top: '0%'
}, 2000);

content.social.css({
    display: 'block',
    bottom: '-100%'
}).velocity({
    bottom: '0%'
}, 2000);

