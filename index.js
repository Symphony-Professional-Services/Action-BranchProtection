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
                'default'
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
        restrictions: {
            users: [
            ],
            teams: [
            ],
            apps: [
            ]
        }
    })
}


try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}