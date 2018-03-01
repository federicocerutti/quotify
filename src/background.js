chrome.contextMenus.create(
    {
        "title": "Quotify",
        "contexts":["editable"],
        "onclick": function(info, tab) 
        {
            chrome.tabs.sendRequest(
                tab.id, 
                {
                    "wrapText": true
                }, 
                function(response){ }
            )
        }
    }
);
