export function convertBigIntToString(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  } else if (typeof obj === "object" && obj !== null) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[key] =
        typeof value === "bigint"
          ? value.toString()
          : convertBigIntToString(value);
      return acc;
    }, {});
  }
  return obj;
}
