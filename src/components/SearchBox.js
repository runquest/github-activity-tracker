import _ from 'lodash'
import React from 'react'
import { Search, Grid, Header, Segment, Container } from 'semantic-ui-react'
import SearchResultItem from './SearchResultItem'
import FeatherIcon from 'feather-icons-react';
import axios from 'axios'
import {searchRepos} from './FetchData'
import CustomSearchIcon from './CustomSearchIcon'

const initialState =          {
  loading: false,
  results: {},
  value: '',
  placeholder: "Search a GitHub Repository...",
}

const items = [
        {
            "id": 10270250,
            "node_id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
            "name": "react",
            "full_name": "facebook/react",
            "private": false,
            "owner": {
                "login": "facebook",
                "id": 69631,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
                "avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/facebook",
                "html_url": "https://github.com/facebook",
                "followers_url": "https://api.github.com/users/facebook/followers",
                "following_url": "https://api.github.com/users/facebook/following{/other_user}",
                "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
                "organizations_url": "https://api.github.com/users/facebook/orgs",
                "repos_url": "https://api.github.com/users/facebook/repos",
                "events_url": "https://api.github.com/users/facebook/events{/privacy}",
                "received_events_url": "https://api.github.com/users/facebook/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/facebook/react",
            "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
            "fork": false,
            "url": "https://api.github.com/repos/facebook/react",
            "forks_url": "https://api.github.com/repos/facebook/react/forks",
            "keys_url": "https://api.github.com/repos/facebook/react/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/facebook/react/teams",
            "hooks_url": "https://api.github.com/repos/facebook/react/hooks",
            "issue_events_url": "https://api.github.com/repos/facebook/react/issues/events{/number}",
            "events_url": "https://api.github.com/repos/facebook/react/events",
            "assignees_url": "https://api.github.com/repos/facebook/react/assignees{/user}",
            "branches_url": "https://api.github.com/repos/facebook/react/branches{/branch}",
            "tags_url": "https://api.github.com/repos/facebook/react/tags",
            "blobs_url": "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/facebook/react/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/facebook/react/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/facebook/react/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/facebook/react/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/facebook/react/languages",
            "stargazers_url": "https://api.github.com/repos/facebook/react/stargazers",
            "contributors_url": "https://api.github.com/repos/facebook/react/contributors",
            "subscribers_url": "https://api.github.com/repos/facebook/react/subscribers",
            "subscription_url": "https://api.github.com/repos/facebook/react/subscription",
            "commits_url": "https://api.github.com/repos/facebook/react/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/facebook/react/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/facebook/react/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/facebook/react/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/facebook/react/contents/{+path}",
            "compare_url": "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/facebook/react/merges",
            "archive_url": "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/facebook/react/downloads",
            "issues_url": "https://api.github.com/repos/facebook/react/issues{/number}",
            "pulls_url": "https://api.github.com/repos/facebook/react/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/facebook/react/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/facebook/react/labels{/name}",
            "releases_url": "https://api.github.com/repos/facebook/react/releases{/id}",
            "deployments_url": "https://api.github.com/repos/facebook/react/deployments",
            "created_at": "2013-05-24T16:15:54Z",
            "updated_at": "2021-02-22T21:04:33Z",
            "pushed_at": "2021-02-22T20:16:30Z",
            "git_url": "git://github.com/facebook/react.git",
            "ssh_url": "git@github.com:facebook/react.git",
            "clone_url": "https://github.com/facebook/react.git",
            "svn_url": "https://github.com/facebook/react",
            "homepage": "https://reactjs.org",
            "size": 162396,
            "stargazers_count": 164071,
            "watchers_count": 164071,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 32871,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 716,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 32871,
            "open_issues": 716,
            "watchers": 164071,
            "default_branch": "master",
            "score": 1.0
        },
        {
            "id": 135786093,
            "node_id": "MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM=",
            "name": "react",
            "full_name": "typescript-cheatsheets/react",
            "private": false,
            "owner": {
                "login": "typescript-cheatsheets",
                "id": 50188264,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjUwMTg4MjY0",
                "avatar_url": "https://avatars.githubusercontent.com/u/50188264?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/typescript-cheatsheets",
                "html_url": "https://github.com/typescript-cheatsheets",
                "followers_url": "https://api.github.com/users/typescript-cheatsheets/followers",
                "following_url": "https://api.github.com/users/typescript-cheatsheets/following{/other_user}",
                "gists_url": "https://api.github.com/users/typescript-cheatsheets/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/typescript-cheatsheets/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/typescript-cheatsheets/subscriptions",
                "organizations_url": "https://api.github.com/users/typescript-cheatsheets/orgs",
                "repos_url": "https://api.github.com/users/typescript-cheatsheets/repos",
                "events_url": "https://api.github.com/users/typescript-cheatsheets/events{/privacy}",
                "received_events_url": "https://api.github.com/users/typescript-cheatsheets/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/typescript-cheatsheets/react",
            "description": "Cheatsheets for experienced React developers getting started with TypeScript",
            "fork": false,
            "url": "https://api.github.com/repos/typescript-cheatsheets/react",
            "forks_url": "https://api.github.com/repos/typescript-cheatsheets/react/forks",
            "keys_url": "https://api.github.com/repos/typescript-cheatsheets/react/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/typescript-cheatsheets/react/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/typescript-cheatsheets/react/teams",
            "hooks_url": "https://api.github.com/repos/typescript-cheatsheets/react/hooks",
            "issue_events_url": "https://api.github.com/repos/typescript-cheatsheets/react/issues/events{/number}",
            "events_url": "https://api.github.com/repos/typescript-cheatsheets/react/events",
            "assignees_url": "https://api.github.com/repos/typescript-cheatsheets/react/assignees{/user}",
            "branches_url": "https://api.github.com/repos/typescript-cheatsheets/react/branches{/branch}",
            "tags_url": "https://api.github.com/repos/typescript-cheatsheets/react/tags",
            "blobs_url": "https://api.github.com/repos/typescript-cheatsheets/react/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/typescript-cheatsheets/react/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/typescript-cheatsheets/react/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/typescript-cheatsheets/react/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/typescript-cheatsheets/react/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/typescript-cheatsheets/react/languages",
            "stargazers_url": "https://api.github.com/repos/typescript-cheatsheets/react/stargazers",
            "contributors_url": "https://api.github.com/repos/typescript-cheatsheets/react/contributors",
            "subscribers_url": "https://api.github.com/repos/typescript-cheatsheets/react/subscribers",
            "subscription_url": "https://api.github.com/repos/typescript-cheatsheets/react/subscription",
            "commits_url": "https://api.github.com/repos/typescript-cheatsheets/react/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/typescript-cheatsheets/react/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/typescript-cheatsheets/react/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/typescript-cheatsheets/react/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/typescript-cheatsheets/react/contents/{+path}",
            "compare_url": "https://api.github.com/repos/typescript-cheatsheets/react/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/typescript-cheatsheets/react/merges",
            "archive_url": "https://api.github.com/repos/typescript-cheatsheets/react/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/typescript-cheatsheets/react/downloads",
            "issues_url": "https://api.github.com/repos/typescript-cheatsheets/react/issues{/number}",
            "pulls_url": "https://api.github.com/repos/typescript-cheatsheets/react/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/typescript-cheatsheets/react/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/typescript-cheatsheets/react/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/typescript-cheatsheets/react/labels{/name}",
            "releases_url": "https://api.github.com/repos/typescript-cheatsheets/react/releases{/id}",
            "deployments_url": "https://api.github.com/repos/typescript-cheatsheets/react/deployments",
            "created_at": "2018-06-02T04:08:16Z",
            "updated_at": "2021-02-22T21:02:53Z",
            "pushed_at": "2021-02-22T20:47:42Z",
            "git_url": "git://github.com/typescript-cheatsheets/react.git",
            "ssh_url": "git@github.com:typescript-cheatsheets/react.git",
            "clone_url": "https://github.com/typescript-cheatsheets/react.git",
            "svn_url": "https://github.com/typescript-cheatsheets/react",
            "homepage": "https://react-typescript-cheatsheet.netlify.app/",
            "size": 2556,
            "stargazers_count": 22095,
            "watchers_count": 22095,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1578,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 4,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 1578,
            "open_issues": 4,
            "watchers": 22095,
            "default_branch": "main",
            "score": 1.0
        },
        {
            "id": 75396575,
            "node_id": "MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==",
            "name": "react",
            "full_name": "duxianwei520/react",
            "private": false,
            "owner": {
                "login": "duxianwei520",
                "id": 3249653,
                "node_id": "MDQ6VXNlcjMyNDk2NTM=",
                "avatar_url": "https://avatars.githubusercontent.com/u/3249653?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/duxianwei520",
                "html_url": "https://github.com/duxianwei520",
                "followers_url": "https://api.github.com/users/duxianwei520/followers",
                "following_url": "https://api.github.com/users/duxianwei520/following{/other_user}",
                "gists_url": "https://api.github.com/users/duxianwei520/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/duxianwei520/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/duxianwei520/subscriptions",
                "organizations_url": "https://api.github.com/users/duxianwei520/orgs",
                "repos_url": "https://api.github.com/users/duxianwei520/repos",
                "events_url": "https://api.github.com/users/duxianwei520/events{/privacy}",
                "received_events_url": "https://api.github.com/users/duxianwei520/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/duxianwei520/react",
            "description": " React+webpack+redux+ant design+axios+less全家桶后台管理框架",
            "fork": false,
            "url": "https://api.github.com/repos/duxianwei520/react",
            "forks_url": "https://api.github.com/repos/duxianwei520/react/forks",
            "keys_url": "https://api.github.com/repos/duxianwei520/react/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/duxianwei520/react/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/duxianwei520/react/teams",
            "hooks_url": "https://api.github.com/repos/duxianwei520/react/hooks",
            "issue_events_url": "https://api.github.com/repos/duxianwei520/react/issues/events{/number}",
            "events_url": "https://api.github.com/repos/duxianwei520/react/events",
            "assignees_url": "https://api.github.com/repos/duxianwei520/react/assignees{/user}",
            "branches_url": "https://api.github.com/repos/duxianwei520/react/branches{/branch}",
            "tags_url": "https://api.github.com/repos/duxianwei520/react/tags",
            "blobs_url": "https://api.github.com/repos/duxianwei520/react/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/duxianwei520/react/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/duxianwei520/react/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/duxianwei520/react/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/duxianwei520/react/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/duxianwei520/react/languages",
            "stargazers_url": "https://api.github.com/repos/duxianwei520/react/stargazers",
            "contributors_url": "https://api.github.com/repos/duxianwei520/react/contributors",
            "subscribers_url": "https://api.github.com/repos/duxianwei520/react/subscribers",
            "subscription_url": "https://api.github.com/repos/duxianwei520/react/subscription",
            "commits_url": "https://api.github.com/repos/duxianwei520/react/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/duxianwei520/react/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/duxianwei520/react/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/duxianwei520/react/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/duxianwei520/react/contents/{+path}",
            "compare_url": "https://api.github.com/repos/duxianwei520/react/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/duxianwei520/react/merges",
            "archive_url": "https://api.github.com/repos/duxianwei520/react/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/duxianwei520/react/downloads",
            "issues_url": "https://api.github.com/repos/duxianwei520/react/issues{/number}",
            "pulls_url": "https://api.github.com/repos/duxianwei520/react/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/duxianwei520/react/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/duxianwei520/react/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/duxianwei520/react/labels{/name}",
            "releases_url": "https://api.github.com/repos/duxianwei520/react/releases{/id}",
            "deployments_url": "https://api.github.com/repos/duxianwei520/react/deployments",
            "created_at": "2016-12-02T13:08:43Z",
            "updated_at": "2021-02-22T11:00:52Z",
            "pushed_at": "2021-02-20T09:29:03Z",
            "git_url": "git://github.com/duxianwei520/react.git",
            "ssh_url": "git@github.com:duxianwei520/react.git",
            "clone_url": "https://github.com/duxianwei520/react.git",
            "svn_url": "https://github.com/duxianwei520/react",
            "homepage": "",
            "size": 2618,
            "stargazers_count": 4059,
            "watchers_count": 4059,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 1476,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 10,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 1476,
            "open_issues": 10,
            "watchers": 4059,
            "default_branch": "master",
            "score": 1.0
        },
        {
            "id": 90759930,
            "node_id": "MDEwOlJlcG9zaXRvcnk5MDc1OTkzMA==",
            "name": "react",
            "full_name": "discountry/react",
            "private": false,
            "owner": {
                "login": "discountry",
                "id": 4507101,
                "node_id": "MDQ6VXNlcjQ1MDcxMDE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/4507101?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/discountry",
                "html_url": "https://github.com/discountry",
                "followers_url": "https://api.github.com/users/discountry/followers",
                "following_url": "https://api.github.com/users/discountry/following{/other_user}",
                "gists_url": "https://api.github.com/users/discountry/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/discountry/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/discountry/subscriptions",
                "organizations_url": "https://api.github.com/users/discountry/orgs",
                "repos_url": "https://api.github.com/users/discountry/repos",
                "events_url": "https://api.github.com/users/discountry/events{/privacy}",
                "received_events_url": "https://api.github.com/users/discountry/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/discountry/react",
            "description": "React docs in Chinese | React 中文文档翻译",
            "fork": false,
            "url": "https://api.github.com/repos/discountry/react",
            "forks_url": "https://api.github.com/repos/discountry/react/forks",
            "keys_url": "https://api.github.com/repos/discountry/react/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/discountry/react/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/discountry/react/teams",
            "hooks_url": "https://api.github.com/repos/discountry/react/hooks",
            "issue_events_url": "https://api.github.com/repos/discountry/react/issues/events{/number}",
            "events_url": "https://api.github.com/repos/discountry/react/events",
            "assignees_url": "https://api.github.com/repos/discountry/react/assignees{/user}",
            "branches_url": "https://api.github.com/repos/discountry/react/branches{/branch}",
            "tags_url": "https://api.github.com/repos/discountry/react/tags",
            "blobs_url": "https://api.github.com/repos/discountry/react/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/discountry/react/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/discountry/react/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/discountry/react/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/discountry/react/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/discountry/react/languages",
            "stargazers_url": "https://api.github.com/repos/discountry/react/stargazers",
            "contributors_url": "https://api.github.com/repos/discountry/react/contributors",
            "subscribers_url": "https://api.github.com/repos/discountry/react/subscribers",
            "subscription_url": "https://api.github.com/repos/discountry/react/subscription",
            "commits_url": "https://api.github.com/repos/discountry/react/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/discountry/react/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/discountry/react/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/discountry/react/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/discountry/react/contents/{+path}",
            "compare_url": "https://api.github.com/repos/discountry/react/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/discountry/react/merges",
            "archive_url": "https://api.github.com/repos/discountry/react/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/discountry/react/downloads",
            "issues_url": "https://api.github.com/repos/discountry/react/issues{/number}",
            "pulls_url": "https://api.github.com/repos/discountry/react/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/discountry/react/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/discountry/react/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/discountry/react/labels{/name}",
            "releases_url": "https://api.github.com/repos/discountry/react/releases{/id}",
            "deployments_url": "https://api.github.com/repos/discountry/react/deployments",
            "created_at": "2017-05-09T15:09:00Z",
            "updated_at": "2021-02-05T01:58:11Z",
            "pushed_at": "2021-01-21T04:43:05Z",
            "git_url": "git://github.com/discountry/react.git",
            "ssh_url": "git@github.com:discountry/react.git",
            "clone_url": "https://github.com/discountry/react.git",
            "svn_url": "https://github.com/discountry/react",
            "homepage": "https://zh-hans.reactjs.org/",
            "size": 35366,
            "stargazers_count": 990,
            "watchers_count": 990,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 531,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 25,
            "license": {
                "key": "cc-by-4.0",
                "name": "Creative Commons Attribution 4.0 International",
                "spdx_id": "CC-BY-4.0",
                "url": "https://api.github.com/licenses/cc-by-4.0",
                "node_id": "MDc6TGljZW5zZTI1"
            },
            "forks": 531,
            "open_issues": 25,
            "watchers": 990,
            "default_branch": "master",
            "score": 1.0
        },
        {
            "id": 72628285,
            "node_id": "MDEwOlJlcG9zaXRvcnk3MjYyODI4NQ==",
            "name": "react",
            "full_name": "Cathy0807/react",
            "private": false,
            "owner": {
                "login": "Cathy0807",
                "id": 20653643,
                "node_id": "MDQ6VXNlcjIwNjUzNjQz",
                "avatar_url": "https://avatars.githubusercontent.com/u/20653643?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Cathy0807",
                "html_url": "https://github.com/Cathy0807",
                "followers_url": "https://api.github.com/users/Cathy0807/followers",
                "following_url": "https://api.github.com/users/Cathy0807/following{/other_user}",
                "gists_url": "https://api.github.com/users/Cathy0807/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Cathy0807/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Cathy0807/subscriptions",
                "organizations_url": "https://api.github.com/users/Cathy0807/orgs",
                "repos_url": "https://api.github.com/users/Cathy0807/repos",
                "events_url": "https://api.github.com/users/Cathy0807/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Cathy0807/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/Cathy0807/react",
            "description": "京东首页构建",
            "fork": false,
            "url": "https://api.github.com/repos/Cathy0807/react",
            "forks_url": "https://api.github.com/repos/Cathy0807/react/forks",
            "keys_url": "https://api.github.com/repos/Cathy0807/react/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/Cathy0807/react/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/Cathy0807/react/teams",
            "hooks_url": "https://api.github.com/repos/Cathy0807/react/hooks",
            "issue_events_url": "https://api.github.com/repos/Cathy0807/react/issues/events{/number}",
            "events_url": "https://api.github.com/repos/Cathy0807/react/events",
            "assignees_url": "https://api.github.com/repos/Cathy0807/react/assignees{/user}",
            "branches_url": "https://api.github.com/repos/Cathy0807/react/branches{/branch}",
            "tags_url": "https://api.github.com/repos/Cathy0807/react/tags",
            "blobs_url": "https://api.github.com/repos/Cathy0807/react/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/Cathy0807/react/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/Cathy0807/react/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/Cathy0807/react/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/Cathy0807/react/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/Cathy0807/react/languages",
            "stargazers_url": "https://api.github.com/repos/Cathy0807/react/stargazers",
            "contributors_url": "https://api.github.com/repos/Cathy0807/react/contributors",
            "subscribers_url": "https://api.github.com/repos/Cathy0807/react/subscribers",
            "subscription_url": "https://api.github.com/repos/Cathy0807/react/subscription",
            "commits_url": "https://api.github.com/repos/Cathy0807/react/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/Cathy0807/react/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/Cathy0807/react/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/Cathy0807/react/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/Cathy0807/react/contents/{+path}",
            "compare_url": "https://api.github.com/repos/Cathy0807/react/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/Cathy0807/react/merges",
            "archive_url": "https://api.github.com/repos/Cathy0807/react/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/Cathy0807/react/downloads",
            "issues_url": "https://api.github.com/repos/Cathy0807/react/issues{/number}",
            "pulls_url": "https://api.github.com/repos/Cathy0807/react/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/Cathy0807/react/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/Cathy0807/react/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/Cathy0807/react/labels{/name}",
            "releases_url": "https://api.github.com/repos/Cathy0807/react/releases{/id}",
            "deployments_url": "https://api.github.com/repos/Cathy0807/react/deployments",
            "created_at": "2016-11-02T10:18:45Z",
            "updated_at": "2021-02-20T07:35:40Z",
            "pushed_at": "2020-10-16T19:58:42Z",
            "git_url": "git://github.com/Cathy0807/react.git",
            "ssh_url": "git@github.com:Cathy0807/react.git",
            "clone_url": "https://github.com/Cathy0807/react.git",
            "svn_url": "https://github.com/Cathy0807/react",
            "homepage": null,
            "size": 940,
            "stargazers_count": 706,
            "watchers_count": 706,
            "language": "JavaScript",
            "has_issues": false,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 399,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 2,
            "license": null,
            "forks": 399,
            "open_issues": 2,
            "watchers": 706,
            "default_branch": "master",
            "score": 1.0
        },
        {
            "id": 77513419,
            "node_id": "MDEwOlJlcG9zaXRvcnk3NzUxMzQxOQ==",
            "name": "react",
            "full_name": "react-redux-antd-es6/react",
            "private": false,
            "owner": {
                "login": "react-redux-antd-es6",
                "id": 24805142,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjI0ODA1MTQy",
                "avatar_url": "https://avatars.githubusercontent.com/u/24805142?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/react-redux-antd-es6",
                "html_url": "https://github.com/react-redux-antd-es6",
                "followers_url": "https://api.github.com/users/react-redux-antd-es6/followers",
                "following_url": "https://api.github.com/users/react-redux-antd-es6/following{/other_user}",
                "gists_url": "https://api.github.com/users/react-redux-antd-es6/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/react-redux-antd-es6/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/react-redux-antd-es6/subscriptions",
                "organizations_url": "https://api.github.com/users/react-redux-antd-es6/orgs",
                "repos_url": "https://api.github.com/users/react-redux-antd-es6/repos",
                "events_url": "https://api.github.com/users/react-redux-antd-es6/events{/privacy}",
                "received_events_url": "https://api.github.com/users/react-redux-antd-es6/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/react-redux-antd-es6/react",
            "description": "基于react的企业后台管理开发框架",
            "fork": false,
            "url": "https://api.github.com/repos/react-redux-antd-es6/react",
            "forks_url": "https://api.github.com/repos/react-redux-antd-es6/react/forks",
            "keys_url": "https://api.github.com/repos/react-redux-antd-es6/react/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/react-redux-antd-es6/react/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/react-redux-antd-es6/react/teams",
            "hooks_url": "https://api.github.com/repos/react-redux-antd-es6/react/hooks",
            "issue_events_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues/events{/number}",
            "events_url": "https://api.github.com/repos/react-redux-antd-es6/react/events",
            "assignees_url": "https://api.github.com/repos/react-redux-antd-es6/react/assignees{/user}",
            "branches_url": "https://api.github.com/repos/react-redux-antd-es6/react/branches{/branch}",
            "tags_url": "https://api.github.com/repos/react-redux-antd-es6/react/tags",
            "blobs_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/react-redux-antd-es6/react/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/react-redux-antd-es6/react/languages",
            "stargazers_url": "https://api.github.com/repos/react-redux-antd-es6/react/stargazers",
            "contributors_url": "https://api.github.com/repos/react-redux-antd-es6/react/contributors",
            "subscribers_url": "https://api.github.com/repos/react-redux-antd-es6/react/subscribers",
            "subscription_url": "https://api.github.com/repos/react-redux-antd-es6/react/subscription",
            "commits_url": "https://api.github.com/repos/react-redux-antd-es6/react/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/react-redux-antd-es6/react/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/react-redux-antd-es6/react/contents/{+path}",
            "compare_url": "https://api.github.com/repos/react-redux-antd-es6/react/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/react-redux-antd-es6/react/merges",
            "archive_url": "https://api.github.com/repos/react-redux-antd-es6/react/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/react-redux-antd-es6/react/downloads",
            "issues_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues{/number}",
            "pulls_url": "https://api.github.com/repos/react-redux-antd-es6/react/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/react-redux-antd-es6/react/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/react-redux-antd-es6/react/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/react-redux-antd-es6/react/labels{/name}",
            "releases_url": "https://api.github.com/repos/react-redux-antd-es6/react/releases{/id}",
            "deployments_url": "https://api.github.com/repos/react-redux-antd-es6/react/deployments",
            "created_at": "2016-12-28T07:44:04Z",
            "updated_at": "2021-02-21T07:13:11Z",
            "pushed_at": "2021-01-20T22:58:27Z",
            "git_url": "git://github.com/react-redux-antd-es6/react.git",
            "ssh_url": "git@github.com:react-redux-antd-es6/react.git",
            "clone_url": "https://github.com/react-redux-antd-es6/react.git",
            "svn_url": "https://github.com/react-redux-antd-es6/react",
            "homepage": "",
            "size": 42963,
            "stargazers_count": 795,
            "watchers_count": 795,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 371,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 12,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 371,
            "open_issues": 12,
            "watchers": 795,
            "default_branch": "master",
            "score": 1.0
        }
    ]


function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: '' }

    default:
      throw new Error()
  }
}

const SearchBox = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value, placeholder } = state

  const timeoutRef = React.useRef()

  const renderSearchResult = (props) => {
    return <SearchResultItem data={props}/>
  }

        const handleSearchChange = React.useCallback((e, data) => {
      clearTimeout(timeoutRef.current)
      dispatch({ type: 'START_SEARCH', query: data.value })

      timeoutRef.current = setTimeout(() => {
        if (data.value.length < 3) {
          props.onSearch(true)
          return
        }

        props.onSearch(false)
        const re = new RegExp(_.escapeRegExp(data.value), 'i')
        // console.log("FETCH DATA - UNCOMMENT", items)
        // console.log("RE", data.value.length)
        // searchRepos().then((response) => {

        //   const data1 = response.items.map((item) => ({
        //       childKey: item.id,
        //       id: item.id,
        //       title: item.full_name,
        //       full_name: item.full_name,
        //     }));
        const data1 = items.map((item) => ({
              childKey: item.id,
              id: item.id,
              title: item.full_name,
              name: item.name,
              owner: item.owner.login,
              updated: item.updated_at,
              stars: item.stargazers_count,
              color: Math.floor(Math.random()*16777215).toString(16)
            }));


          dispatch({
            type: 'FINISH_SEARCH',
            results: data1.slice(0, 3)
          })
        // })
      }, 300)
    }, []
  )

  const handleOnFocus = (event) => {
    event.target.placeholder = ""
  }

  const handleOnBlur = (event) => {
     dispatch({ type: 'CLEAN_QUERY' })
    event.target.placeholder = placeholder
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleResultSelection = (event, data) => {
    props.onSelect(data.result)
    dispatch({ type: 'CLEAN_QUERY' })
  }

      return ( 
      <Search
        placeholder={placeholder}
        loading={loading}
        onResultSelect={handleResultSelection}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        fluid={true}
        minCharacters={3}
        icon={{ children: <CustomSearchIcon /> }}
        resultRenderer={renderSearchResult}
        />
  )
}

export default SearchBox;