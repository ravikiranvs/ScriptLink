# SharePoint UserCustomAction with LiveReload [<img src="https://travis-ci.org/ravikiranvs/ScriptLink.svg?branch=master" />](https://travis-ci.org/ravikiranvs/ScriptLink)

This source code shows the best practices for creating a UserCustomAction for SharePoint.

# Liberaries and Tools
* Babel
* webpack
* ESLint, Karma, Mocha, Chai
* LiveReload

# Loader Pattern
The goal of the loader pattern is to provide a way to embed an unknown number of remote scripts into a site without having to update the site. The updates can be done on the remote CDN and will update all sites.

Read more about the [Loader Pattern](https://github.com/OfficeDev/PnP-Guidance/blob/master/articles/javascript-patterns-and-performance.md#LoaderPattern).

# Sharepoint JS PnP
The Patterns and Practices JavaScript Core Library was created to help simplifying common operations within SharePoint.
Currently it contains a fluent API for working with the full SharePoint REST API as well as utility and helper functions.

[The PnP JS Core Repository](https://github.com/OfficeDev/PnP-JS-Core)

# Unit Testing

The unit testing is run using Karma. It is configured to run in both IE and Chrome. See configuration file [here](./karma.conf.js).

Running the unit tests: `npm run test`

## Writing Unit Tests

The unit test files can be placed anywhere within the src folder but has to end with the extention .spec.js

We have couple of testcases written for the custom Script Link: [search-selected-text.spec.js](./src/user-custom-actions/say-hello/search-selected-text.spec.js).

The Asserts are done using the chai-jquery liberary.

# Build

Generating the bundled and minified file for development: `npm run dev`

Generating the bundled and minified file for production: `npm run build:prod`
# Configuring Script Link

Deploying the Script Link is out of scope of this sample code and manually upload the file to the Style Liberary document liberary.

You can use the below `C#` code to add a custom script link file. 
```CSharp
using (ClientContext context = new ClientContext("http://site-collection/"))
{
    context.Credentials = new NetworkCredential("username", "password", "domain");
    var site = context.Site;
    context.Load(site);
    context.Load(site.UserCustomActions);
    context.ExecuteQuery();
    
    var newScriptLink = site.UserCustomActions.Add();
    newScriptLink.Name = "script-link-name";
    newScriptLink.Location = "ScriptLink";
    newScriptLink.ScriptSrc = String.Format("~site/Style Library/scripts/custom-action.bundle.js");
    newScriptLink.Sequence = 1000;
    newScriptLink.Update();
    context.Load(newScriptLink);
    context.ExecuteQuery();
}
```

# Live Reload

Continuously build and host files and start the LiveReload server: `npm start`
Injecting the LiveReload script tag on the SharePoint Page. Use this Chrome Extention - [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

That's it! This should now enable livereloading.
