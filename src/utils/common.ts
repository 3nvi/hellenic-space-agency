/**
 * A function that takes a text and returns a valid slug for it. Useful for filename and url
 * creation
 *
 * @param {String} text A string to parse
 * @returns {String} A slugified string
 */
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
