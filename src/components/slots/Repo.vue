<script setup lang="ts">
// import {useRepoStore} from '../../state/manager.ts';


defineProps<{
    item: {
        id: 4693487,
        node_id: "MDEwOlJlcG9zaXRvcnk0NjkzNDg3",
        "name": "FloZ",
        "full_name": "Alexeye/FloZ",
        "private": false,
        "owner": {
            login: string,
            html_url: string,
        },
        "html_url": "https://github.com/Alexeye/FloZ",
        "description": "ololo",
        "fork": false,
        "url": "https://api.github.com/repos/Alexeye/FloZ",
        "forks_url": "https://api.github.com/repos/Alexeye/FloZ/forks",
        "keys_url": "https://api.github.com/repos/Alexeye/FloZ/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Alexeye/FloZ/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Alexeye/FloZ/teams",
        "hooks_url": "https://api.github.com/repos/Alexeye/FloZ/hooks",
        "issue_events_url": "https://api.github.com/repos/Alexeye/FloZ/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Alexeye/FloZ/events",
        "assignees_url": "https://api.github.com/repos/Alexeye/FloZ/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Alexeye/FloZ/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Alexeye/FloZ/tags",
        "blobs_url": "https://api.github.com/repos/Alexeye/FloZ/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Alexeye/FloZ/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Alexeye/FloZ/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Alexeye/FloZ/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Alexeye/FloZ/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Alexeye/FloZ/languages",
        "stargazers_url": "https://api.github.com/repos/Alexeye/FloZ/stargazers",
        "contributors_url": "https://api.github.com/repos/Alexeye/FloZ/contributors",
        "subscribers_url": "https://api.github.com/repos/Alexeye/FloZ/subscribers",
        "subscription_url": "https://api.github.com/repos/Alexeye/FloZ/subscription",
        "commits_url": "https://api.github.com/repos/Alexeye/FloZ/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Alexeye/FloZ/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Alexeye/FloZ/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Alexeye/FloZ/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Alexeye/FloZ/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Alexeye/FloZ/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Alexeye/FloZ/merges",
        "archive_url": "https://api.github.com/repos/Alexeye/FloZ/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Alexeye/FloZ/downloads",
        "issues_url": "https://api.github.com/repos/Alexeye/FloZ/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Alexeye/FloZ/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Alexeye/FloZ/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Alexeye/FloZ/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Alexeye/FloZ/labels{/name}",
        "releases_url": "https://api.github.com/repos/Alexeye/FloZ/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Alexeye/FloZ/deployments",
        "created_at": "2012-06-17T17:29:43Z",
        "updated_at": "2013-01-09T18:06:57Z",
        "pushed_at": "2012-06-17T17:29:43Z",
        "git_url": "git://github.com/Alexeye/FloZ.git",
        "ssh_url": "git@github.com:Alexeye/FloZ.git",
        "clone_url": "https://github.com/Alexeye/FloZ.git",
        "svn_url": "https://github.com/Alexeye/FloZ",
        "homepage": null,
        "size": 48,
        "stargazers_count": 1,
        "watchers_count": 1,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
    },

}>()


</script>

<template>
    <div class="border-2 border-black w-full text-center rounded-[20px] font-bold">

        <h3>
            <a :href="item.owner.html_url" target="_blank"> Автор - {{ item.owner.login }}
            </a>
        </h3>

        <h3> Название репозитория - {{ item.name }} </h3>
        <h3>Описание - {{ item.description }}</h3>
        <h3>Язык - {{ item.language || 'idk' }}</h3>
        <h3>Количество звезд - {{ item.watchers_count }} </h3>
    </div>
</template>



<style scoped></style>