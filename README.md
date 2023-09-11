### Clone the repository
```bash
git clone https://github.com/noureddinel/DataStructure1.git
```
### Install dependencies
```bash
npm install
```
### Run the development 
```bash
npm run dev
```
### General file structure for a Sveltekit app 
```bash
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ ├ error.html
│ ├ hooks.client.js
│ └ hooks.server.js
├ static/
│ └ [your static assets]
├ tests/
│ └ [your tests]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```
### Local database
db file in the src folder contains the necessary javascript files with arrays of data objects to display pages content dynamicly. it contains also a file named **authorizedEmails** that will contain the **list of all authorized emails** to access the platform. just **add the emails there** to automaticly grant access to users others wise they will all be denied

### Static files
Images will be found in the static folder.

### Svelte deployment to github pages
We will have to follow this tutorial to deploy the sveltekit app to github pages
[Sveltekit deployment to github pages]https://www.devsamples.com/javascript/svelte/deploy-svelte-app-gh-pages



