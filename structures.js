function search(doodles) {
  const arr = [];
  for (doodle of doodles) {
    const obj = {};
    obj.title = doodle.title;
    obj.query = doodle.query;
    obj.slug = doodle.name;
    obj.dateArray = doodle.run_date_array;
    obj.hoverText = doodle.hover_text;
    obj.shareText = doodle.share_text;
    obj.translations = doodle.translations;
    obj.url = `https:${doodle.url}`;
    obj.hiResURL = `https:${doodle.hires_url}`;
    obj.alternateURL = doodle.alternate_url;

    arr.push(obj);
  }
  return arr;
}

function archive(doodles) {
  const arr = [];
  for (doodle of doodles) {
    const obj = {};
    obj.title = doodle.title;
    obj.query = doodle.query;
    obj.slug = doodle.name;
    obj.shareText = doodle.share_text;
    obj.dateArray = doodle.run_date_array;
    obj.translations = doodle.translations;
    obj.url = `https:${doodle.url}`;
    obj.hiResURL = doodle.hires_url;
    obj.hiResHeight = doodle.hires_height;
    obj.hiResWidth = doodle.hires_width;
    obj.alternateURL = doodle.alternate_url;

    arr.push(obj);
  }
  return arr;
}

exports.SearchResult = class {
  constructor(res) {
    this.results = res.doodles.length;
    this.doodles = search(res.doodles);
  }
};

exports.Archive = class {
  constructor(res) {
    this.results = res.length;
    this.doodles = archive(res);
  }
};
