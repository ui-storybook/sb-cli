# sb-cli

Easiest way to add [SB](https://github.com/ui-storybook/sb) to your project.

Install sb-cli globally.

```
npm i -g sb-cli
```

Then go to your project and run:

```
sb-create
```

That's all you've to do.

---

## Yarn support

sb-cli also supports yarn. If you are using yarn, this is how to use it:

```
yarn global add sb-cli
sb-create --use-yarn
```

`sb-create` will identify it's installed with yarn and it'll use yarn to install deps.

> This is the way, if you wanna use yarn for all of your storybook projects.

If that's not the case, you can do this:

```
npm i -g sb-cli
getstorybook --use-yarn

```

For more information, refer [SB](https://github.com/ui-storybook/sb) documentation.
