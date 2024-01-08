# list commands git

git clone 
    [url repo]
git init //initialize repository
git add 
    [file name.ext] // add specific file
    -A // add all new files
    --no-ignore-removal
    --no-all
    --ignore-removal
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
    --intent-to-add
    --refresh
    --ignore-errors
    --ignore-missing
    --no-warn-embedded-repo
    --renormalize
    --chmod=(+|-)x
    --pathspec-from-file=<file>
    --pathspec-file-nul
    --
git rm
    -r [file name] //remove file
git am
    -s
    -k
    --keep-non-patch
    --[no-]keep-cr
    -c
    --no-scissors
    --quoted-cr=<action>
    --empty=(stop|drop|keep)
    -m
    --message-id
    --no-message-id
    -q
    -u
    --no-utf8
    -3
    --no-3way
    --rerere-autoupdate
    --no-rerere-autoupdate
    --ignore-space-change
    --ignore-whitespace
    --whitespace=<action>
    -C<n>
    -p<n>
    --directory=<dir>
    --exclude=<path>
    --include=<path>
    --reject
    --patch-format
    -i
    -n
    --committer-date-is-author-date
    --ignore-date
    --skip
    -S[<keyid>]
    --gpg-sign[=<keyid>]
    --no-gpg-sign
    --continue
    -r
    --resolved
    --resolvemsg=<msg>
    --abort
    --quit
    --show-current-patch[=(diff|raw)]
    --allow-empty
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