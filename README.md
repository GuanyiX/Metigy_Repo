Related skills:

- React
- Redux
- CSS
- Sass
- Ant Design
- Ajax
- Node.js
- Koa
- Koa router
- Rest API
- MySQL
- Docker
- Postman


Pre-requisite:

- cd ./be.Metigy 
- npm install
- node index.js

- cd ./fe.Metigy
- npm install
- npm start

If something wrong, please restart the backend server and refresh the front end page



Database:

- MySQL: Password may need to be changed in folder db
- It creates a new database "mydb", 2 new tables "defaultinfo" and "updatedinfo" 


Backend: 

- get http://localhost:8000/default to obtain default data
- post http://localhost:8000/updated to save new data
- get http://localhost:8000/updated to obtain new data


Frontend:

- Automatically get data from backend 
- Click "Export report" to save all new data to backend server (table updatedinfo)
- All keywords, sites, settings are able to be changed by users


What I didn't do:

- Docker compose: The reason is I am not familiar with Docker compose
- Responsive design: Limited time and don't have a UI design
- Numbers in settings component are not saved: I don't really understand the logic in this part, but we can use the same logic as the one in checkboxs.
- Test scripts: Limited time and not sure if it is necessary

