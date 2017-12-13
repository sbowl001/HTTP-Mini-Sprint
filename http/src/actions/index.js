import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    
    const apiUrl = "http://localhost:5000/friends";
    const friendsRequest = axios.get(apiUrl);
    return {
        type: GET_FRIENDS,
        payload: friendsRequest,
    };
};

//enter redux-promise and axios 


//http hyper text hyper protocol  < is stateless.  server on other side doesn't know who you are
//Methods: 
// GET: client wants information from the server
//POST create a resource
//PUT modify info on server
//Delete removing info
// most operations are asynchronous 
// promise: substitute for callbacks
//var promise = new Promise();

//promise
 //   .then(function(results){
        //this means the promise succeeded 
 //   })
 //   .catch(function(error){
        //handle the error
 //   });