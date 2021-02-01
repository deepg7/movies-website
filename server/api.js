const { argv } = require('process')
const request = require('request')

const movieName=argv[2]

const movie =((movieName,callback)=>{

const url ='http://www.omdbapi.com/?t='+encodeURIComponent(movieName)+'&apikey=f99cc1fb'

request({url:url,json:true},(error,{body})=>{
    if (error){
        callback('Unable to find the Movie datails!',undefined)
    }else{
        callback(undefined,{body})
    }
})
})
module.exports=movie