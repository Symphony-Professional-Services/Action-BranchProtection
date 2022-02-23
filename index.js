const core = require('@actions/core');
const github = require('@actions/github');

async function run(octokit) {

    // Doc: https://docs.github.com/en/rest/reference/branches#update-branch-protection
    return await octokit.request('PUT /repos/{owner}/{repo}/branches/{branch}/protection', {
        owner: 'Symphony-Professional-Services',
        repo: 'Bot-Zeus',
        branch: 'master',
        required_status_checks: {
            strict: true,
            contexts: [
            ],
            checks: [
            ]
        },
        enforce_admins: null,
        required_pull_request_reviews: {
            dismissal_restrictions: {},
            dismiss_stale_reviews: true,
            require_code_owner_reviews: false,
            required_approving_review_count: 1,
            bypass_pull_request_allowances: null
        },
        restrictions: null
    })
}


try {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const myToken = core.getInput('repo-token');

    const octokit = github.getOctokit(myToken);
    // You can also pass in additional options as a second parameter to getOctokit
    // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});

    // run octokit
    run(octokit).then(r => console.log(r));
} catch (error) {
    core.setFailed(error.message);
}