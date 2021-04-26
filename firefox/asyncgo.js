// Hardcode team ID for now
// TODO: make configurable
asyncgo_team_id = 1

function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.menus.create({
  id: "save-selection",
  title: "Create topic from selection",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "save-page",
  title: "Create topic from page",
  contexts: ["page"]
}, onCreated);

function buildUrl(context, selection) {
   return 'https://app.asyncgo.com/teams/' + asyncgo_team_id + '/topics/new?context=' + encodeURIComponent(context) + '&selection=' + encodeURIComponent(selection) + ''
}

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "save-selection":
      browser.tabs.create({url: buildUrl(info.pageUrl, info.selectionText)})
      console.log(info.pageUrl);
      console.log(info.selectionText);
      break;
    case "save-page":
      browser.tabs.create({url: buildUrl(info.pageUrl, '')})
      console.log(info.pageUrl);
      break;
  }
});
