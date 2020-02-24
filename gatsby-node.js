const config = require('./gatsby-config');
/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  await deletePage(page);

  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async lang => {
      await createPage({
        ...page,
        path: lang + page.path,
        context: {
          ...page.context,
          originalPath: page.path,
          host: process.env.URL || 'localhost:8000',
          lang,
        },
      });
    })
  );
};
