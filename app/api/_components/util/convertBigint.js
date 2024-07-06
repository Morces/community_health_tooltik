export function convertBigIntToString(obj) {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === "bigint") {
    return obj.toString();
  }

  if (obj instanceof Date) {
    return obj.toISOString();
  }

  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      return obj.map(convertBigIntToString);
    }
    const result = {};
    for (const key in obj) {
      result[key] = convertBigIntToString(obj[key]);
    }
    return result;
  }

  return obj;
}
