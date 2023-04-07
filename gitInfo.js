/*
    For this section of the assessment you will be putting together a cheat sheet for
     common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = `Git is a source control system that helps you manage your project development.
Git allows you to keep track of your progress, allowing you to back trace if needed. Git also allows 
easier collaboration as each member can branch off in their own feature and work on it without 
interfering with the main branch. Git is also not the same as Github!`

//////////////////PROBLEM 2///////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = `Github is a website allowing you to post your commits on a server/website. 
This allows for remote collaboration and so users don't have to store their projects on their local 
computer. Github acts like a library where user's can store and access repos. Others users can use,
contribute, and read your open source projects.`

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = `
git is the keyword to tell the terminal you want to use git commands
init is short for initialize. 
This will start/initialize a repo or source control and keep tracks of your projects.`

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = `git clone (github https link) will download or clone a remote repo 
from github onto your computer. It will download at the current working directory that the user
typed the command in.`

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = `git status will show you whats being tracked and what's not being tracked
on the staging area.`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = `git add will track the following files you add with the command. This
will move the files to the staging area-right before a commit.`

const gitAddCode = `git add .`

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = `git commit will move the files from the staging area into a final 
area to be saved. Think of this as a checkpoint, it will save every file from the staging area
into a checkpoint. `

const gitCommitCode = `git commit -m "initial commit"`

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = `git push will only work if you have an upstream/remote url set. 
You will have to provide your repo with a url to your github repo in order to push it. Git push 
will send the latest commit to the remote Github link attached to the project.`