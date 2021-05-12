chrome.contextMenus.create({
  id: 'save-selection',
  title: 'Create topic from selection',
  contexts: ['selection']
})

chrome.contextMenus.create({
  id: 'save-page',
  title: 'Create topic from page',
  contexts: ['page']
})

function buildUrl (context, selection) {
  return 'https://app.asyncgo.com/extension/new_topic?context=' + encodeURIComponent(context) + '&selection=' + encodeURIComponent(selection) + ''
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'save-selection':
      chrome.tabs.create({ url: buildUrl(info.pageUrl, info.selectionText) })
      break
    case 'save-page':
      chrome.tabs.create({ url: buildUrl(info.pageUrl, '') })
      break
  }
})
