import express from 'express';
import axios from 'axios'

const server = express();

server.use(express.json());

//Routing
server.post('/events', async (req, res) => {
    console.log('Recieved event from moderation:',req.body)
    const { type, data } = req.body;

    if (type === "COMMENT_UPDATED") {

        const status = data.comments.includes('orange') ? 'rejected' : 'approved'

        await axios.post('http://localhost:4005/events', {
            type: "COMMENT_MODERATED",
            data: {
                ...data,
                status
            }
        })
    }

    res.send({})

})


export default server