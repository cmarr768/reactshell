Creating this project to be a shell react project that runs in vs code.

For vs code, I recommend the following vs code extensions:
    Javascript ES6 snippets
    React native tools
    React snippets
    vscode-icons

Ensure you have node.js installed.  This gives you access to npm.  I just go to https://nodejs.org/en/ and download.

Most of this can be found in this tutorial: https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm

Setup:
Open the node.js console.
Install babel globals:

    npm install babel babel-cli -g
    
Make new directory for this app.

    mkdir reactshell
    
Change to this directory.
Run the following and accept the defaults unless you want to change something:

    npm init
    
Next we need to install webpack:

    install webpack
    npm install webpack webpack-dev-server --save
    
Now we will install react and babel:

    npm install react react-dom --save
    npm install babel-core babel-loader babel-preset-react babel-preset-es2015
    
Now if you have downloaded this repository to the folder you created you should be ready to launch your app.
Run this command and open the site listed:

    npm start
