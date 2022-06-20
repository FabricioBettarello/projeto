//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:user1234@fiaptecnico.wyiew.mongodb.net/dblr')
}

//exportar as infomações para acesso externo
module.exports = conn 