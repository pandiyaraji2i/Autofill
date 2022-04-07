browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello")
        sendResponse({ farewell: "goodbye" });
});


let port = browser.runtime.connectNative("application.id");


port.onMessage.addListener(function(message) {
    console.log("Received native port message:");
    console.log(message);
});
