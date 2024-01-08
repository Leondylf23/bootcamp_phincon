# list commands git

git config --global user.name “[firstname lastname]"

git init [-q | --quiet] [--bare] [--template=<template-directory>]
	  [--separate-git-dir <git-dir>] [--object-format=<format>]
	  [-b <branch-name> | --initial-branch=<branch-name>]
	  [--shared[=<permissions>]] [<directory>]
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
git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
	   [--dry-run] [(-c | -C | --squash) <commit> | --fixup [(amend|reword):]<commit>)]
	   [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
	   [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
	   [--date=<date>] [--cleanup=<mode>] [--[no-]status]
	   [-i | -o] [--pathspec-from-file=<file> [--pathspec-file-nul]]
	   [(--trailer <token>[(=|:)<value>])…​] [-S[<keyid>]]
	   [--] [<pathspec>…​]
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
git bundle create [-q | --quiet | --progress]
		    [--version=<version>] <file> <git-rev-list-args>
git bundle verify [-q | --quiet] <file>
git bundle list-heads <file> [<refname>…​]
git bundle unbundle [--progress] <file> [<refname>…​]
git merge
    [branch name]
    [source branch] [target branch]
git pull
git checkout [-q] [-f] [-m] [<branch>]
git checkout [-q] [-f] [-m] --detach [<branch>]
git checkout [-q] [-f] [-m] [--detach] <commit>
git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new-branch>] [<start-point>]
git checkout [-f] <tree-ish> [--] <pathspec>…​
git checkout [-f] <tree-ish> --pathspec-from-file=<file> [--pathspec-file-nul]
git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [--] <pathspec>…​
git checkout [-f|--ours|--theirs|-m|--conflict=<style>] --pathspec-from-file=<file> [--pathspec-file-nul]
git checkout (-p|--patch) [<tree-ish>] [--] [<pathspec>…​]
git cherry-pick [--edit] [-n] [-m <parent-number>] [-s] [-x] [--ff]
		  [-S[<keyid>]] <commit>…​
git cherry-pick (--continue | --skip | --abort | --quit)
git citool
git clean [-d] [-f] [-i] [-n] [-q] [-e <pattern>] [-x | -X] [--] [<pathspec>…​]
git describe [--all] [--tags] [--contains] [--abbrev=<n>] [<commit-ish>…​]
git describe [--all] [--tags] [--contains] [--abbrev=<n>] --dirty[=<mark>]
git describe <blob>
git stash //stash changes into dirty working directory
git stash clear //clear stashed changes
git status //status
git push origin
    --delete  [branch name] //delete remote branch
git log //view changes
    --summary //view changes (detailed)
    --oneline //view changes (briefly)
    --follow
    --no-decorate
    --decorate[=short|full|auto|no]
    --decorate-refs=<pattern>
    --decorate-refs-exclude=<pattern>
    --clear-decorations
    --source
    --[no-]mailmap
    --[no-]use-mailmap
    --full-diff
    --log-size
    -L<start>,<end>:<file>
    -L:<funcname>:<file>
git maintenance run [<options>]
git maintenance start [--scheduler=<scheduler>]
git maintenance (stop|register|unregister) [<options>]
git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
	[--no-verify] [-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
	[--[no-]allow-unrelated-histories]
	[--[no-]rerere-autoupdate] [-m <msg>] [-F <file>]
	[--into-name <branch>] [<commit>…​]
git merge (--continue | --abort | --quit)
git diff [<options>] [<commit>] [--] [<path>…​]
git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>…​]
git diff [<options>] [--merge-base] <commit> [<commit>…​] <commit> [--] [<path>…​]
git diff [<options>] <commit>…​<commit> [--] [<path>…​]
git diff [<options>] <blob> <blob>
git diff [<options>] --no-index [--] <path> <path>
git fetch [<options>] [<repository> [<refspec>…​]]
git fetch [<options>] <group>
git fetch --multiple [<options>] [(<repository> | <group>)…​]
git fetch --all [<options>]
git format-patch [-k] [(-o|--output-directory) <dir> | --stdout]
		   [--no-thread | --thread[=<style>]]
		   [(--attach|--inline)[=<boundary>] | --no-attach]
		   [-s | --signoff]
		   [--signature=<signature> | --no-signature]
		   [--signature-file=<file>]
		   [-n | --numbered | -N | --no-numbered]
		   [--start-number <n>] [--numbered-files]
		   [--in-reply-to=<message id>] [--suffix=.<sfx>]
		   [--ignore-if-in-upstream] [--always]
		   [--cover-from-description=<mode>]
		   [--rfc] [--subject-prefix=<subject prefix>]
		   [(--reroll-count|-v) <n>]
		   [--to=<email>] [--cc=<email>]
		   [--[no-]cover-letter] [--quiet]
		   [--[no-]encode-email-headers]
		   [--no-notes | --notes[=<ref>]]
		   [--interdiff=<previous>]
		   [--range-diff=<previous> [--creation-factor=<percent>]]
		   [--filename-max-length=<n>]
		   [--progress]
		   [<common diff options>]
		   [ <since> | <revision range> ]
git gc [--aggressive] [--auto] [--quiet] [--prune=<date> | --no-prune] [--force] [--keep-largest-pack]
git grep [-a | --text] [-I] [--textconv] [-i | --ignore-case] [-w | --word-regexp]
	   [-v | --invert-match] [-h|-H] [--full-name]
	   [-E | --extended-regexp] [-G | --basic-regexp]
	   [-P | --perl-regexp]
	   [-F | --fixed-strings] [-n | --line-number] [--column]
	   [-l | --files-with-matches] [-L | --files-without-match]
	   [(-O | --open-files-in-pager) [<pager>]]
	   [-z | --null]
	   [ -o | --only-matching ] [-c | --count] [--all-match] [-q | --quiet]
	   [--max-depth <depth>] [--[no-]recursive]
	   [--color[=<when>] | --no-color]
	   [--break] [--heading] [-p | --show-function]
	   [-A <post-context>] [-B <pre-context>] [-C <context>]
	   [-W | --function-context]
	   [(-m | --max-count) <num>]
	   [--threads <num>]
	   [-f <file>] [-e] <pattern>
	   [--and|--or|--not|(|)|-e <pattern>…​]
	   [--recurse-submodules] [--parent-basename <basename>]
	   [ [--[no-]exclude-standard] [--cached | --no-index | --untracked] | <tree>…​]
	   [--] [<pathspec>…​]
git gui [<command>] [<arguments>]
git mv [-v] [-f] [-n] [-k] <source> <destination>
git mv [-v] [-f] [-n] [-k] <source> ... <destination directory>
git notes [list [<object>]]
git notes add [-f] [--allow-empty] [--[no-]separator | --separator=<paragraph-break>] [--[no-]stripspace] [-F <file> | -m <msg> | (-c | -C) <object>] [<object>]
git notes copy [-f] ( --stdin | <from-object> [<to-object>] )
git notes append [--allow-empty] [--[no-]separator | --separator=<paragraph-break>] [--[no-]stripspace] [-F <file> | -m <msg> | (-c | -C) <object>] [<object>]
git notes edit [--allow-empty] [<object>] [--[no-]stripspace]
git notes show [<object>]
git notes merge [-v | -q] [-s <strategy> ] <notes-ref>
git notes merge --commit [-v | -q]
git notes merge --abort [-v | -q]
git notes remove [--ignore-missing] [--stdin] [<object>…​]
git notes prune [-n] [-v]
git notes get-ref
git pull [<options>] [<repository> [<refspec>…​]]
git push [--all | --branches | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>]
	   [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-q | --quiet] [-v | --verbose]
	   [-u | --set-upstream] [-o <string> | --push-option=<string>]
	   [--[no-]signed|--signed=(true|false|if-asked)]
	   [--force-with-lease[=<refname>[:<expect>]] [--force-if-includes]]
	   [--no-verify] [<repository> [<refspec>…​]]
git revert [commitid] //revert changes
git reset
git tag
git rebase
--get-regexp <name-regex> [<value-pattern>]
git config [<file-option>] [--type=<type>] [-z|--null] --get-urlmatch <name> <URL>
git config [<file-option>] [--fixed-value] --unset <name> [<value-pattern>]
git config [<file-option>] [--fixed-value] --unset-all <name> [<value-pattern>]
git config [<file-option>] --rename-section <old-name> <new-name>
git config [<file-option>] --remove-section <name>
git config [<file-option>] [--show-origin] [--show-scope] [-z|--null] [--name-only] -l | --list
git config [<file-option>] --get-color <name> [<default>]
git config [<file-option>] --get-colorbool <name> [<stdout-is-tty>]
git config [<file-option>] -e | --edit