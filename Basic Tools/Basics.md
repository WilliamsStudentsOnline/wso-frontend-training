# Basic Tools

## Table of Contents
1. Developer Tools
1. ESLint
1. Git
1. Prettier
1. Yarn

## Developer Tools

See [Developer Tools](Developer%20Tools.md).

## ESLint

[ESLint](https://eslint.org/docs/user-guide/getting-started) helps to lint (statically analyze and identify errors) in our code. There are also editor plugins which may be available for your editor.

## Git

Relevant xkcd: https://xkcd.com/1597/

Git is a version control system (VCS) that tracks changes made towards a project, as well as who did them, and any additional notes on the changes. This is useful when collaborating with other people, or to look back and see why a certain change was done.

### TL;DR

Git takes snapshots (commits) and names them (commit hash), branches point to snapshots, snapshots are linked in chains. Set up [SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for convenience.

```bash
$ git init // Initialize a local git repo
$ git add <file> // Add file to staging area
$ git status // Check status of Working tree
$ git commit -m <commit message> // Creates a commit of the changes with a message
$ git push // pushes your repository from local to remote
$ git pull // pull the latest from remote repository
$ git clone // Clones a repository locally
$ git checkout <branch> // Checks out a branch
```


## Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter, which can be used to ensure that your code is well-formatted, even when multiple people with different habits are working on the same repository. There are two main ways of using it:

**1. As an editor plugin** 

Certain editors can be set to format on save!

**2. As a Javascript package** 

We can add it as a Javascript package, and in doing so, set up rules such as ensuring formatting before commit. Refer to the "Get started" section of the website.   

## Yarn

Yarn is an alternative to npm, and both are package managers for the Javascript ecosystem. Yarn often tends to be faster, and offers some nifty commands, although for most use cases both are interchangable.