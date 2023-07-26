# Get Youtube Subscribers API

The project involves us to construct a API to obtain YouTube Subscribers data for a Mongodb database.

According to the guidelines given for the CapStone project, we must develop a backend API that will deliver responses in JSON format, utilizing modular coding that uses separate files for each api connection, a separate file to handle the database and an app for all routes.

#### All of the routes use Get http methods.

- **/subscribers** will return a list(array) of subscribers.
- **/subscribers/names** - An array of subscribers is returned in the response having only two values name and subscribedChannel.
- **/subscribers/:id** - return the subscriber with the matching ID that is provided.
- _if the id does not match give an Modified error message along with the statusCode_

## Reflection 💠

- This project was built during my third module of Backend Development at AlmaBetter. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

- Originally I wanted to use Netlify functions so that I can deploy it as a serverless API but went with the guidelines provided.

## Built with

 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="25">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="25">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" height="25">

## Resources Used

- Knowledge of Node, Express js and MongoDB.
- Mongoose Docs.
