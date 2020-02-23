export const extractLangFromPathname = (pathname: string) => {
  const match = pathname.match(/\/[a-z-]+\//);
  if (match) {
    return match[0].replace(/\//g, '');
  }
};
