## Zazu

[![Join the chat at https://gitter.im/tinytacoteam/zazu](https://badges.gitter.im/tinytacoteam/zazu.svg)](https://gitter.im/tinytacoteam/zazu?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Travis Build Status](https://travis-ci.org/tinytacoteam/zazu.svg?branch=master)](https://travis-ci.org/tinytacoteam/zazu)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/mhfi0vyyo7dygqiu/branch/master?svg=true)](https://ci.appveyor.com/project/blainesch/zazu)

Zazu, is a cross platform and fully extensible and open source launcher for
hackers, creators and dabblers. Download it from the [releases
page](http://zazuapp.org/download).

Zazu was created to be a fully open source alternative to Alfred, but also be
completely plugin based. You can remove any functionality you don't like, so if
you hate the built in calculator, just get a new one!

We also have all of your configuration in a dotfile in `~/.zazurc.json` so it can
be backed up and synced!

Be sure to check out our amazing [Documentation](http://zazuapp.org).

## Action Shot

![Zazu App](docs/images/action-shots/file-finder.png)

## Development

As you might expect:

~~~
npm install
npm start
~~~

If you enable debug mode it will make it so Zazu won't hide and the dev tools
will open by default. You can enable debug mode by adding a `debug` flag to
`true` inside of your `~/.zazurc.json`

~~~ javascript
{
  "debug": true,
  "hotkey": "cmd+space",
  "theme": "tinytacoteam/zazu-playful-theme",
  "plugins": []
}
~~~

## Deployment

To deploy simple update the version in both `package.json` and
`app/package.json` (eg `0.3.2`). After comitting you can tag the release, but
be sure to add the `v` in front (eg `v0.3.2`). Push the commits then the tag.

The CI servers will upload the assets once the tests are done passing, the new
release should be a draft, so once all assets are published you can publish the
release on GitHub.

Lastly, you should re-publish the docs. Zazu uses the doc website to see if a
new release is available so doing a quick release will allow others to download
the newest version. Simply run `npm run docs:publish`.
