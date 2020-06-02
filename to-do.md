1. New Repo created
  - Parse payload for `"action": "created"`
  html_url has repo url / name
    - if statement
2. If true, protect master branch
  - PUT https://api.github.com/repos/:owner/:repo/branches/:branch/protection
  - Parms
    - owner
    - repo
    - branch

3. Post Issue with reference of change
  - POST https://api.github.com/repos/:owner/:repo/issues
  - Parms
    - owner
    - repo
4. If false, simple response.
