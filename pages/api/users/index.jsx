import Data from '../../../data.json';

export default function handler(req, res){
    return res.status(200).json(Data.users);
}