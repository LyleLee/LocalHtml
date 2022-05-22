// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    console.log("click in url");
    console.log(tab.url);
    console.log(tab);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['editor.js'],
    });
});