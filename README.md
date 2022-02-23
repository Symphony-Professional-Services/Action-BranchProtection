# Action-BranchProtection

An action to add branch protection to your GitHub repository.

Run `npm build` to compile index.js.

## Inputs

### `repo-token`

**Required** The GITHUB_TOKEN to call the GitHub API.

## Example usage

Example of a job calling this action:

    branch-protection:
        name: Branch Protection
        runs-on: ubuntu-latest
        environment: local
        steps:
          - name: Update branch protection
            id: hello
            uses: Symphony-Professional-Services/Action-BranchProtection@v0.1
            with:
              repo-token: ${{ secrets.GITHUB_TOKEN }}
