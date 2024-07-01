import Fuse from "fuse.js";

export function Fuzzy({
  search = "",
  items = [],
  options = {
    isCaseSensitive: false,
    includeScore: false,
    minMatchCharLength: 3,
  },
  keys = [],
}) {
  const fuse = new Fuse(items, {
    ...options,
    keys,
  });

  let results = fuse.search(search);
  return results.map((result) => result.item);
}
