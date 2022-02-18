# Action-BranchProtection

An action to add branch protection to your github repository.

Run `npm build` to compile index.js.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

    uses: actions/Action-BranchProtection@v0.1
    with:
      who-to-greet: 'Mona the Octocat'
