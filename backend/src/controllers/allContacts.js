const knex = require('../connection');

const theContacts = async (req, res)=>{
    try{
        const contacts = await knex('contacts');
        if(contacts.length < 1){
            return res.status(200).json({message: 'No contact register'});
        }
        return res.status(200).json(contacts);

    }catch(error){
        console.log(error)
        return res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = theContacts;