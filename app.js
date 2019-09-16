const axios = require('axios')
const fs = require('fs')

function grabit(req, res) {
    let fn = ''
    for (let i = 0; i < 199; i++) {
        axios.get('http://example.com/'+i+'.js')
        .then(function (response) {
            fs.writeFile("files/"+i+'.js', response.data, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            })
        })
        .catch(function (error) {
            console.log("error")
        })
    }
}
grabit()