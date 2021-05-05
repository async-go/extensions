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
  const url = 'http://localhost:3000/extension/new_topic/'
  const method = 'POST'

  const tab = chrome.tabs.create({url: 'about:blank'});

  const form = JSON.stringify({context: context, selection: selection})

  fetch(url, {
      method: method,
      body: form
      })
      .catch(err => {
          tab.close();
      });
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
