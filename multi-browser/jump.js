let postRequest = document.getElementById("postRequest");

const urlParams = new URLSearchParams(window.location.search)
const selection = urlParams.get('selection')
const context = urlParams.get('context')

fetch('https://app.asyncgo.com/extension/new_topic', {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
    body: JSON.stringify({ selection: selection, context: context }),
})
.then(response => response)
.then(data => console.log(data))
