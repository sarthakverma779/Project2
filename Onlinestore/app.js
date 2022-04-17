console.log('sarthak app');
const fs - require('fs');
fs.appendfile('greeting.txt','Hello world',function(err){
    if(err){
        console.log('Error Occured');
    }
});
fs.appendfileSync('abc.text','I am learning nodejs');
const os require('os');
var user=os.userinfo();
console.log(user);
fs.appendfileSync('BI.txt','Hello'+user.username+"!!!!")