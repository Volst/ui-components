To get started, clone this repository and run `yarn install`.

After that, you can run Storybook with `yarn start`. In your browser, open `http://localhost:9001`. Storybook is an UI development environment; you can see all components separately here and visually test them.

The components you see in Storybook are generated from `*.stories.tsx` files in the `src/` directory.

## Adding a feature

Every component should have a `.stories.tsx` file. For components that do not make sense on it's own (e.g. `src/layout/*.tsx`), you could make an `index.stories.tsx` file (e.g. `src/layout/index.stories.tsx`).

When adding a feature, whether that is a whole component or a prop, please make sure to add/update the respective `stories.tsx` file.
You can add a new story to the file for each prop or combine a couple of different props in one story.

## Publishing changes

Only relevant if you have npm publish permissions.

Before publishing, make sure you have ran `git pull && yarn` so you have all the latest changes.

Check if there are breaking changes or features in the unpublished commits. If there are breaking changes, release a `major` version. If no breaking changes, but a new feature (e.g. a new component, a new prop), release a `minor` version. If there are only bugfixes, release a `patch` version.

Run `npm version patch && git push && npm publish` to publish the changes; replace `patch` with `major` or `minor` as described above.
