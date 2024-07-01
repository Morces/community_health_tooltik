export function formatOrder(order_by) {
  try {
    const order = {};
    if (order_by.includes("-")) {
      let str = order_by.split("-");
      order[str[0]] = str[1];
      return order;
    }

    return { id: "desc" };
  } catch (e) {
    console.log(e);
    return {};
  }
}

export function formatFilter({ filter = "", field = "", orFilter, andFilter }) {
  try {
    if (!filter) return;
    let docs = filter.split(",");
    let filterAr = [];

    for (let id of docs) {
      let doc = {};
      doc[field] = parseInt(id) ? parseInt(id) : id;
      filterAr.push(doc);
      orFilter.push(doc);
    }

    andFilter.push({ OR: filterAr });
  } catch (e) {
    console.log(e);
  }
}

export function rangeFilter({ range, orFilter, andFilter }) {
  try {
    const options = ["gt", "gte", "lt", "lte"];
    if (!range) return;

    if (typeof range !== "string") {
      return;
    }

    const ranges = range.split(",");

    let filterAr = [];

    for (let i = 0; i < ranges.length; i++) {
      const r = ranges[i].split("$");
      console.log(r);
      let doc = {};
      if (r.length !== 3) {
        continue;
      }

      if (!options.includes(r[1])) {
        continue;
      }

      let rObj = {};

      rObj[r[1]] = r[2];
      doc[r[0]] = rObj;
      orFilter.push(doc);
      filterAr.push(doc);
    }
    andFilter.push({ OR: filterAr });
  } catch (e) {
    console.log(e);
  }
}

export function updateWhere({ method, andFilter, orFilter }) {
  try {
    if (method && method === "or") {
      return { OR: [...orFilter] };
    }
    return { AND: [...andFilter] };
  } catch (e) {
    return {};
  }
}

export function filterDoc({ filter = "", fDoc = {}, field }) {
  let doc = JSON.parse(filter);
  const keys = Object.keys(doc);

  return doc;
}

export function inFilter({ filter = "", whereDoc = {}, field = "" }) {
  try {
    if (!filter) {
      return;
    }
    let fArr = filter.split(",");
    let inArr = [];
    for (let n of fArr) {
      inArr.push(parseInt(n) || n);
    }
    if (inArr.length > 1) {
      let d = {};
      d["in"] = inArr;
      whereDoc[field] = d;
      return;
    }
    whereDoc[field] = parseInt(filter) || filter;
  } catch (e) {
    // return whereDoc;
  }
}

export function inRange({
  rangeGte = "",
  rangeLte = "",
  whereDoc = {},
  field = "",
  type = "",
}) {
  try {
    if (type === "date") {
      inRangeDate({ rangeGte, rangeLte, whereDoc, field });
    }
    if (type === "integer") {
      inRangeInteger({ rangeGte, rangeLte, whereDoc, field });
    }
  } catch (e) {
    console.log(e);
  }
}

export function inRangeDate({
  rangeGte = "",
  rangeLte = "",
  whereDoc = {},
  field = "",
}) {
  let d = {};

  if (rangeGte) {
    d.gte = new Date(rangeGte);
  }

  if (rangeLte) {
    d.lte = new Date(rangeLte);
  }

  if (Object.keys(d).length > 0) {
    whereDoc[field] = d;
  }
}

export function inRangeInteger({
  rangeGte = "",
  rangeLte = "",
  whereDoc = {},
  field = "",
}) {
  let d = {};

  if (rangeGte) {
    if (!isNaN(rangeGte)) {
      d.gte = parseInt(rangeGte);
    }
  }

  if (rangeLte) {
    if (!isNaN(rangeGte)) {
      d.lte = parseInt(rangeLte);
    }
  }

  if (Object.keys(d).length > 0) {
    whereDoc[field] = d;
  }
}
