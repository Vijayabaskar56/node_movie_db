const { default: OpenAI } = require("openai");

const movieRecommandation = async (req, res) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
    });

    async function main() {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
            prompt: "suggest me some feel good movie to watch"
        });

        console.log(completion.choices);
    }

    main();

    res.status(200).json({
        status: "hello world!"
    })
}

module.exports = movieRecommandation;