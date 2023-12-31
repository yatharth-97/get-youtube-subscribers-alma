# Get Youtube Subscribers API

The project involves us to construct a RESTful API to obtain YouTube Subscribers data for a Mongodb database.

According to the guidelines given for the CapStone project, we must develop a backend API that will deliver responses in JSON format, utilizing modular coding that uses separate files for each api connection, a separate file to handle the database and an app for all routes.

I have added some custom middlewares that will help us in catching common errors and avoiding try-catch blocks for our controllers.

- **/subscribers** : will return whole array of objects from our database which gives us subscribers using get http method.
- **/subscribers/names** : subscribers' names is returned in the response having only two values name and subscribedChannel (also uses get http method).
- **/subscribers/:id** : On using get http method it will return the subscriber with the matching ID that is provided( _if the id does not match, it gives a modified error message along with the statusCode_)

## Reflection 💠

- This project was built during my third module of Backend Development at AlmaBetter. Project goals included using technologies learned up until this point and familiarizing myself with documentation of express and mongoose.

- I wanted to use Netlify functions for deployment but was facing many issues with serverless functions due to the particular folder setup and root path. So I went with Vercel platform as it didn't required many configuration and was easy to setup my environment variables.

## Built with

 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="25">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="25">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" height="25">

## Deployed on

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height="25">

## Resources Used

- Knowledge of Node, Express js and MongoDB.
- Mongoose Docs.
