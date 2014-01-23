var resetDefaultSuggestion = function() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'dapi: Search the Drupal API for %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

var navigate = function(url) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("https://api.drupal.org/api/drupal/7/search/" + text);
}
