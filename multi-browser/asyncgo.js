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

function openTab (context, selection) {
  chrome.tabs.create({ url: 'jump.html?context=' + encodeURIComponent(context) + '&selection=' + encodeURIComponent(selection), active: true })
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'save-selection':
      openTab(info.pageUrl, info.selectionText)
      break
    case 'save-page':
      openTab(info.pageUrl, '')
      break
  }
})
