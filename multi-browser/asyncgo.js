chrome.contextMenus.create({
  id: "save-selection",
  title: "Create topic from selection",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "save-page",
  title: "Create topic from page",
  contexts: ["page"]
});

function openTab (context, selection) {
  chrome.tabs.create({url: 'https://app.asyncgo.com', active: true}, function (tab) { chrome.tabs.executeScript(tab.id, {code: `alert("hello");`}); });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "save-selection":
      openTab(info.pageUrl, info.selectionText)
      break;
    case "save-page":
      openTab(info.pageUrl, '')
      break;
  }
});
