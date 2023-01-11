# Wilson and His Toys

This is a repository that powers [www.rangoric.com](https://www.rangoric.com).

Its built using [Gatsby JS](https://www.gatsbyjs.org/).

The content is from a bunch of places, and the license files in the data folder will have more information on that, while basic notes are here.

## How to Fork & Make Your Own

Generally you can just use the website. If you want to pull it down locally or fork it to make it your own...

- Delete the following folders:
  - `src/pages/about-me/*`
  - `src/pages/resume/*`
  - `static/*` -> Or replace the data in there with your own.
    - This folder has a CNAME file for Github to set the url of the Github Pages
    - It also has a Google identification file.
- Remove my name from the top of this file and from `src/pages/index.js`
- The MIT license can be changed to add your name and copyright notice.
- Have at it.

## Automation

The build is automated using Github Actions on each push to the working branch.

## Acknowledgements

### Data Sources of Note

- Lots of v3.5 SRD material was downloaded and turned to markdown from [dndsrd.net](http://dndsrd.net)

### Tools & Helpers of Note

- [Gatsby JS](https://www.gatsbyjs.org/) - This site was created using Gatsby JS tools.
