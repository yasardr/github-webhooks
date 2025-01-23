import { envs } from '../../config';




export class DiscordService {

    private readonly discordWebhookurl = envs.DISCORD_WEBHOOK_URL;

    constructor() {}

    async notify(message: string) {
        const body = {
            content: message,
            // embeds: [
            //     {
            //         image: { url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3o0bm9tbXU0dGg2ZGZkYm90a3hycTNjdDk0cGxnb3oxZ3lsZ3NkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cXblnKXr2BQOaYnTni/giphy.gif" }
            //     }
            // ]
        }

        const resp = await fetch(this.discordWebhookurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!resp.ok) {
            console.log('Error sending message todiscord');
            return false;
        }

        return true;
    }

}