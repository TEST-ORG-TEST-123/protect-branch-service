## Overview

This repo creates a simple web service that listens for organization events to know when a repository has been created. When a repository is created, it automates protecting the master branch. Then notifies of the change with an issue creation.

## Before starting,
1. [Install node.js for windows](https://nodejs.org/dist/v12.18.0/node-v12.18.0-x64.msi)
2. Verify node.js is installed via `node -v` & `npm -v` via Git Bash

## Getting started,
1. After cloning, set environment variable `TOKEN`
      - `export TOKEN=xxxx-xxx` via Git Bash
      - Token is a PAT with scopes to admin:org, admin:org_hook, admin:repo_hook, repo.
2. At root of repository run `npm install`
      - This will install project dependencies  
2. At root of repository run `node index`
      - This starts the web service listening at http://localhost:3000
      - The POST api url is http://localhost:3000/
3. Add webhook for notifications on repo creation
      -  Go here https://github.com/organizations/TEST-ORG-TEST-123/settings/hooks/
         - Where `TEST-ORG-TEST-123` is your org name.
4. Configure webhook
      - payload url = `https://example:3000/`
         - `http://localhost:3000/` is not reachable, in production you would change localhost with the publicly accessible host's ip address.
      - content type = application/json
      - Which events would you like to trigger this webhook?
         - Select `Let me select individual events`
         - Check only `Repositories`
         - Select add webhook.
5. Complete
      - Now, all newly created repo will have protected master.
      - For testing on local environment, Recent Deliveries will show error.
         - Using the payload from Recent Deliveries, you can test your local setup by replicating failed api call to localhost.
            - This can be done with Postman or curl command (see curl example below)
```
curl --location --request POST 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{
  "action": "created",
  "repository": {
    "id": 268771286,
    "node_id": "MDEwOlJlcG9zaXRvcnkyNjg3NzEyODY=",
    "name": "TEST2",
    "full_name": "TEST-ORG-TEST-123/TEST2",
    "private": true,
    "owner": {
      "login": "TEST-ORG-TEST-123",
      "id": 60269594,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjYwMjY5NTk0",
      "avatar_url": "https://avatars3.githubusercontent.com/u/60269594?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/TEST-ORG-TEST-123",
      "html_url": "https://github.com/TEST-ORG-TEST-123",
      "followers_url": "https://api.github.com/users/TEST-ORG-TEST-123/followers",
      "following_url": "https://api.github.com/users/TEST-ORG-TEST-123/following{/other_user}",
      "gists_url": "https://api.github.com/users/TEST-ORG-TEST-123/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/TEST-ORG-TEST-123/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/TEST-ORG-TEST-123/subscriptions",
      "organizations_url": "https://api.github.com/users/TEST-ORG-TEST-123/orgs",
      "repos_url": "https://api.github.com/users/TEST-ORG-TEST-123/repos",
      "events_url": "https://api.github.com/users/TEST-ORG-TEST-123/events{/privacy}",
      "received_events_url": "https://api.github.com/users/TEST-ORG-TEST-123/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/TEST-ORG-TEST-123/TEST2",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2",
    "forks_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/forks",
    "keys_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/teams",
    "hooks_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/hooks",
    "issue_events_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/issues/events{/number}",
    "events_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/events",
    "assignees_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/assignees{/user}",
    "branches_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/branches{/branch}",
    "tags_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/tags",
    "blobs_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/languages",
    "stargazers_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/stargazers",
    "contributors_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/contributors",
    "subscribers_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/subscribers",
    "subscription_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/subscription",
    "commits_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/contents/{+path}",
    "compare_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/merges",
    "archive_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/downloads",
    "issues_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/issues{/number}",
    "pulls_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/labels{/name}",
    "releases_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/releases{/id}",
    "deployments_url": "https://api.github.com/repos/TEST-ORG-TEST-123/TEST2/deployments",
    "created_at": "2020-06-02T10:31:18Z",
    "updated_at": "2020-06-02T10:31:18Z",
    "pushed_at": null,
    "git_url": "git://github.com/TEST-ORG-TEST-123/TEST2.git",
    "ssh_url": "git@github.com:TEST-ORG-TEST-123/TEST2.git",
    "clone_url": "https://github.com/TEST-ORG-TEST-123/TEST2.git",
    "svn_url": "https://github.com/TEST-ORG-TEST-123/TEST2",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  "organization": {
    "login": "TEST-ORG-TEST-123",
    "id": 60269594,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjYwMjY5NTk0",
    "url": "https://api.github.com/orgs/TEST-ORG-TEST-123",
    "repos_url": "https://api.github.com/orgs/TEST-ORG-TEST-123/repos",
    "events_url": "https://api.github.com/orgs/TEST-ORG-TEST-123/events",
    "hooks_url": "https://api.github.com/orgs/TEST-ORG-TEST-123/hooks",
    "issues_url": "https://api.github.com/orgs/TEST-ORG-TEST-123/issues",
    "members_url": "https://api.github.com/orgs/TEST-ORG-TEST-123/members{/member}",
    "public_members_url": "https://api.github.com/orgs/TEST-ORG-TEST-123/public_members{/member}",
    "avatar_url": "https://avatars3.githubusercontent.com/u/60269594?v=4",
    "description": null
  },
  "enterprise": {
    "id": 1731,
    "slug": "dxc-technology",
    "name": "DXC Technology",
    "node_id": "MDEwOkVudGVycHJpc2UxNzMx",
    "avatar_url": "https://avatars2.githubusercontent.com/b/1731?v=4",
    "description": null,
    "website_url": null,
    "html_url": "https://github.com/enterprises/dxc-technology",
    "created_at": "2019-12-18T23:52:06Z",
    "updated_at": "2020-04-06T17:33:36Z"
  },
  "sender": {
    "login": "djsmicks",
    "id": 15988228,
    "node_id": "MDQ6VXNlcjE1OTg4MjI4",
    "avatar_url": "https://avatars1.githubusercontent.com/u/15988228?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/djsmicks",
    "html_url": "https://github.com/djsmicks",
    "followers_url": "https://api.github.com/users/djsmicks/followers",
    "following_url": "https://api.github.com/users/djsmicks/following{/other_user}",
    "gists_url": "https://api.github.com/users/djsmicks/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/djsmicks/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/djsmicks/subscriptions",
    "organizations_url": "https://api.github.com/users/djsmicks/orgs",
    "repos_url": "https://api.github.com/users/djsmicks/repos",
    "events_url": "https://api.github.com/users/djsmicks/events{/privacy}",
    "received_events_url": "https://api.github.com/users/djsmicks/received_events",
    "type": "User",
    "site_admin": false
  }
}'
```       
