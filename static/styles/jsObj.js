const obj={
    intents:[{
    tag: "greetings",
  patterns: ["hello","hey","hi","greetings"],
  responses: ["Hey!","Hello!","Hi!","Hello, what can do for you?"]
    },
    {tag: "goodbye",
    patterns: ["bye","see you later","goodbye","talk to you later"],
    responses: ["Glad I could help, bye","Ok bye","Talk to you later!","Bye, see you soon!"]},
    {tag: "name",
    patterns: ["who are you?","what is your name?","what may i call you?","what do you do?","what are you for?"],
    responses: ["I am BankingBot and I answer bank related queries"]},
    ]
}
obj['intents'].forEach(element => {
    console.log(element['tag']);
    console.log(element['patterns']);
    console.log(element['responses']);
});