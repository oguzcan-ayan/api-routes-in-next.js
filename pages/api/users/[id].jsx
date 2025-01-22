import Data from '../../../data.json';

export default function personHandler(req, res) {
    const { method, cookies, query } = req;
    const { id } = query;

    if(id === "redirectMe") {
        res.redirect(307, "/");
    }

    const filtered = Data.users.find((user) => user.id === parseInt(id, 10));
    console.log({ method, cookies, secretEnv: process.env.SECRET_TOKEN });

    if(!filtered){
        return res.status(404).json({ message: `User with id: ${id} not found.` });
    }

    return res.status(200).json(filtered);
}