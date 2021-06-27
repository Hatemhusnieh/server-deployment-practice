# server-deployment-practice  

## How do I install the app or library?  
1. copy the link of the repo
1. clone the repo on your local machine by `git clone repo-url`
1. download independencies by `npm i`
1. create a `.env`, then cope the content of `.env.sample` file inside the `.env` file.
1. fill the variables of `.env`
1. run the app

- You can check the app through the following link
  - [URL](https://hatem-server-deploy-prod.herokuapp.com/)  

## How do I test the app or library?  
- to test the `404` error type after the link of the app `/` and then any thing like: `sand`, `roro`, `etc`
- to test the `500` error type `bad` after the app link 
ex) `http://localhost:3000/bad` or `https://hatem-server-deploy-prod.herokuapp.com/bad`
- to test any errors type at your terminal `npm run lint`
- to test errors type at your terminal `npm test`


