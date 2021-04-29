function onCreated() {
  if (chrome.runtime.lastError) {
    console.log(`Error: ${chrome.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

chrome.contextMenus.create({
  id: "save-selection",
  title: "Create topic from selection",
  contexts: ["selection"]
}, onCreated);

chrome.contextMenus.create({
  id: "save-page",
  title: "Create topic from page",
  contexts: ["page"]
}, onCreated);

function buildUrl(context, selection) {
   return 'https://app.asyncgo.com/new/topic?context=' + encodeURIComponent(context) + '&selection=' + encodeURIComponent(selection) + ''
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "save-selection":
      chrome.tabs.create({url: buildUrl(info.pageUrl, info.selectionText)})
      console.log(info.pageUrl);
      console.log(info.selectionText);
      break;
    case "save-page":
      chrome.tabs.create({url: buildUrl(info.pageUrl, '')})
      console.log(info.pageUrl);
      break;
  }
});
