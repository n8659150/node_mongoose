const mongoose = require('mongoose');
const kittenSchema = mongoose.Schema({
    name: String,
    createDate: Date
});
// var silence = new Kitten({name:'silence',createDate:new Date()});//创建一个实例

// silence.save((err) => {
//     if (err){
//         console.log(err);
//     }else{
//         console.log('保存成功');
//     }
// });
module.exports = mongoose.model('kitten', kittenSchema);