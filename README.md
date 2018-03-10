# Test API App

Creating a test API to see how the process works.

## Built With
* [Node](https://nodejs.org/en/download/)
* [Express](https://expressjs.com/) - framework
* [MongoDB](https://www.mongodb.com/) - used for creating the database
* [Body-Parser](https://github.com/expressjs/body-parser) - used for dealing with easier JSON requests
* [mLab](https://mlab.com/welcome/?gclid=Cj0KCQiAoY7VBRDtARIsAHWoO-KnHHgxdBBdOzaJ1oSE0E6ufEqrTcV9p7JVauFPcET5CSbV33TdUOwaAgNFEALw_wcB) - used for hosting the database, free for small projects
* [Nodemon](https://nodemon.io/) - used to automatically restart the server any time a file is saved

## Setup

Create a directory to clone the repo, move into the directory, and clone it down:
```
mkdir test-api
cd test-api
git clone https://github.com/sarahmorris926/test-api.git
```

Then install the frameworks/dependencies mentioned earlier:
```
npm install -g
```

You will also need to create a `config` folder in the root, and add a `db.js` file inside of that for the credentials. There is no need to create an account on [mLab](https://mlab.com/welcome/?gclid=Cj0KCQiAoY7VBRDtARIsAHWoO-KnHHgxdBBdOzaJ1oSE0E6ufEqrTcV9p7JVauFPcET5CSbV33TdUOwaAgNFEALw_wcB) as I already have. These contents already have the correct username (user) and password (password). Original, I know. Here are the contents you will need for the `db.js` file: 
```
module.exports = {
    url : 'mongodb://user:password@ds111059.mlab.com:11059/test-api-db'
};
```

## Using
I used [Postman](https://www.getpostman.com/) to add notes to my API and test it, but you can use whatever software you like. If you're using Postman, you can add a note to the API by using the `POST` method and posting to `localhost:8080/notes/`. Click on the "Body" tab and select the "x-www-form-urlencoded" button, and add a note like this: 

![Using Postman to add a note](./screenshots/addingNote.png?raw=true "Adding a Note in Postman")

To read a note, or get back a note, you need to have the `_id` from the object that Postman returns once added to the database. You can see your note in Postman by adding the `_id` to the end of the `GET` method URL, like this: 

![Using Postman to get back a note](./screenshots/getNote.png?raw=true "Getting back a Note in Postman")

## Acknowledgments
Created with the [Medium: Building an Api](https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2) tutorial. 
