# list commands git

git clone 
    [url repo]
git init //initialize repository
git add 
    [file name.ext] // add specific file
    -A // add all new files
    -n //dry run
    -v //verbose
    -f //force add file
    --sparse
    -i //interactive - add modified files
    -p
    -e
    -u
    -no-all
    -N
    --refresh
git rm
    -r [file name] //remove file
git commit
    -m "[commit message]"
git branch
    [branch name] // add new branch
    -a // list all branch names
    -d [branch name] // delete branch
    -D [branch name] // force delete branch
    -m [old branch name] [new branch name] //rename branch
git merge
    [branch name]
    [source branch] [target branch]
git pull
git checkout
    - //switch branch to last checked out
    -- //delete changes to a file
    -b [branch name] // create new branch and switch to it
    -b [branch name] origin/[branch name] // create new remote branch and switch to it
git stash //stash changes into dirty working directory
git stash clear //clear stashed changes
git status //status
git push origin
    --delete  [branch name] //delete remote branch
git log //view changes
    --summary //view changes (detailed)
    --oneline //view changes (briefly)
git diff
    [source branch] [target branch] //preview changes
git revert [commitid] //revert changes
git reset
git tag
git rebase
git config
    --global user.name "[username]" //set git global username
    --global user.email "[email]" //set git global email
    --global --list