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
git archive
    --format=<fmt>
    -l
    -v
    --prefix=<prefix>/
    -o <file>
    --add-file=<file>
    --add-virtual-file=<path>:<content>
    --worktree-attributes
    --mtime=<time>
    <extra [zip | tar]>
        -<digit> //for zip
        -<number> //for tar
    --remote=<repo>
    --exec=<git-upload-archive>
    <tree-ish>
    <path>
git bisect start [--term-(new|bad)=<term-new> --term-(old|good)=<term-old>]
	  [--no-checkout] [--first-parent] [<bad> [<good>...]] [--] [<paths>...]
git bisect (bad|new|<term-new>) [<rev>]
git bisect (good|old|<term-old>) [<rev>...]
git bisect terms [--term-good | --term-bad]
git bisect skip [(<rev>|<range>)...]
git bisect reset [<commit>]
git bisect (visualize|view)
git bisect replay <logfile>
git bisect log
git bisect run <cmd> [<arg>...]
git bisect help
git commit
    -m "[commit message]"
git branch [--color[=<when>] | --no-color] [--show-current]
	[-v [--abbrev=<n> | --no-abbrev]]
	[--column[=<options>] | --no-column] [--sort=<key>]
	[--merged [<commit>]] [--no-merged [<commit>]]
	[--contains [<commit>]] [--no-contains [<commit>]]
	[--points-at <object>] [--format=<format>]
	[(-r | --remotes) | (-a | --all)]
	[--list] [<pattern>…​]
git branch [--track[=(direct|inherit)] | --no-track] [-f]
	[--recurse-submodules] <branchname> [<start-point>]
git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
git branch --unset-upstream [<branchname>]
git branch (-m | -M) [<oldbranch>] <newbranch>
git branch (-c | -C) [<oldbranch>] <newbranch>
git branch (-d | -D) [-r] <branchname>…​
git branch --edit-description [<branchname>]
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