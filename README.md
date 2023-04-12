# Personal VOD dump

Website: https://d-lieu.github.io/

This project is hosted on github pages using the `gh-pages` library.
The `master` branch contains the website code written in React and Typescript.


## Available Scripts

In the project directory, you can run:

### `npm run deploy`

That will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build.
Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

