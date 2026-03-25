Create a PR for the current work. Follow these steps in order:

1. Run `git status` to see all modified and untracked files
2. Stage files by name — do NOT use `git add .` or `git add -A`
3. Check for any new/modified assets (images in `public/`, fonts, etc.) and confirm they are staged
4. Confirm the current branch name and that it is not `main`
5. Create a concise, descriptive commit message summarizing the changes
6. Push the branch to remote with `-u` if not yet tracking
7. Create a PR using `gh pr create` with:
   - A short title (under 70 characters)
   - A body that groups changed files by category (e.g. Content, Styles, Data, Config, Scripts)
   - A brief summary of what changed and why

Return the PR URL when done.
