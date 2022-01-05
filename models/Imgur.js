// Class for getting images from Imgur.com

class Imgur {
    client_id = process.env.API_CLIENT_ID;
    client_secret = process.env.API_CLIENT_SECRET;

    // get image from imgur
    get = async (imageHash) => {
        data = await fetch(`https://api.imgur.com/3/image/${imageHash}`, {
            method: 'GET',
            headers: {
                'Authorization': `Client-ID ${this.client_id}`
            }
        });
        return data;
    }
}
module.exports = new Imgur();