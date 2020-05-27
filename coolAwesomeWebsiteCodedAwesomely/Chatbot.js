
var chat = new Chat();
    var settings = {
        config: {
            debug: true,
            behaviour: {
                showTypingDots: true
            }
        }, talk: {
            init: {
                talks: ["Hello there","Do you want to talk to a bot or a real person?"],
                answers: ["I wanna talk with Michael", "The bot is fine, thank you"],
                next: ["git", "myName"]
            },
            myName: {
                talks: ["Ill be your bot this walk through.", "Do you want to try me?"],
                answers: ["Yes, sure!"],
                next: ["git"]
            },
            git: {
                talks: ["Head over to [My GitHub Profile](https://github.com/andreaspabst/js-site-chat-bot)"]
            }
        }
    };
    chat.init(settings);

