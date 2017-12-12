# blur-up-implementation
A basic example of an image blur up technique

[example](https://i.imgur.com/RQGRUx1.gifv)

For Primitive (SQIP) images to load make sure you have the requirements listed [at this repo](https://github.com/technopagan/sqip)

## Getting started...
### Server (node.js)
1. `npm install`
2. `node .` (The node server will now create any progressive images needed in `server/static/small` by looping through any images inside `server/static`)
3. Open a new terminal

### Frontend implementation (vue.js)
1. `cd frontend`
2. `npm install`
3. `npm run dev`

The server and frontend are now running.. Images hosted by node at `http://localhost:3000` frontend example hosted on `http://localhost:8080`

## How it works
### Basic blur up technique
The frontend makes two requests.. one for the progressive image and one for the whole image.

The progressive image is created by the node server from the images located in `server/static` to 20px wide.

The frontend displays this image at a given size, blurred and then replaced when the original image is loaded from `server/static`

### SQIP
The SQIP technique (SVG-Based Image Placeholder) uses SVGs with a blur over primitive shapes.
