const allLocales = ['en', 'el'];

exports.onCreatePage = async ({ page, actions }, { locales = allLocales }) => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const { createPage, deletePage } = actions;

  await deletePage(page);

  await Promise.all(
    locales.map(async lang => {
      const localizedPath = lang + page.path;

      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          currentLocale: lang,
          canonicalPageUri: page.path,
          localizedPageInfo: locales.map(lang => ({
            lang: lang,
            uri: `${lang}${page.path}`,
          })),
          locales,
        },
      });
    })
  );
};
