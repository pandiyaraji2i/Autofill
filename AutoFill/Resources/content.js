const primary = "primary"

function setValue (profile) {
    inputFields = document.querySelectorAll(`input[type="text"], input[type="email"], select`)
    inputFields.forEach( (element) => {
        fillFields(profile, element)
    })
}

function fillFields(profile, element) {
    for(let field in fieldNames) {
        let names = fieldNames[field]
        for(let name of names) {
            if (isElementMatches(element, name) ) {
                return autofill(element, profile, field)
            }
        }
    }
}

function isElementMatches(element, name) {
    if (element.getAttribute("autocomplete")?.toLowerCase().includes(name)) {
        return true
    } else if (element.getAttribute("name")?.toLowerCase().includes(name)) {
        return true
    } else if (element.getAttribute("id")?.toLowerCase().includes(name)) {
        return true
    } else if (element.getAttribute("placeholder")?.toLowerCase().includes(name)) {
        return true
    } else {
        return false
    }
 }

profile1 = {
    email: "hiring@iomd.info",
    password: "test@123",
    firstName: "Rohan",
    lastName: "Mahadevan",
    phone: "4085551212",
    address1: "900 Menlo Oaks Drive",
    address2: "Palmolive",
    city: "Menlo Park",
    country: "US",
    state: "CA",
    postalCode: "94025",
    cardnumber:"5459612890007890",
    expiry: "04/24",
    cvv: "123"
}

secondaryProfile = {
    email: "test3.ideas2it@iomd.info",
    password: "test@123",
    firstName: "Harsha",
    lastName: "Elchuri",
    phone: "4085551212",
    address1: "361 Linfield drive",
    address2: "Palmolive",
    city: "Menlo Park",
    country: "US",
    state: "CA",
    postalCode: "94025",
    cardnumber:"5459612890007174",
    expiry: "07/22",
    cvv: "345"
}

anonmyousProfile = {
    email: "test2.ideas2it@iomd.info",
    password: "test@123",
    firstName: "Test2",
    lastName: "Ideas2it",
    phone: "4085551212",
    address1: "Belle Haven Branch Library",
    address2: "Palmolive",
    city: "Menlo Park",
    country: "US",
    state: "CA",
    postalCode: "94025",
    cardnumber:"4207399013131009",
    expiry: "04/23",
    cvv: "456"
}

let fieldNames = {
    email: ["email"],
    phone: ["phone", "mobile"],
    firstName: ["firstname", "first name", "first_name", "first-name", "first", "fname"],
    lastName: ["lastname", "last name", "last_name", "last-name", "last", "lname"],
    address1: ["address1", "address 1", "address line 1", "location"],
    address2: ["address2", "address 2", "address line 2", "street2"],
    city: ["city"],
    state: ["state", "region", "zone"],
    country: ["country"],
    postalCode: ["postal", "postcode", "pincode", "zip", "post-code", "post", "post_code"],
    cardnumber: ["cc-number", "credit-card-number", "creditcardnumber", "cardnumber", "encryptedCardNumber"],
    expiry : ["cc-exp", "expirationDate", "expiration", "encrptedExpiryDate"],
    cvv: ["cs-csc", "cvv", "encryptedSecurityCode"]
}

function autofill(element, profile, field) {
    console.log("filling")
    let event = document.createEvent("HTMLEvents");
    event.initEvent('change', true, false);
    element.focus();
    element.value = profile[field];
    element.dispatchEvent(event);
    element.blur();
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//        setPrimaryValue()
//    if (request.key == primary){
//    setPrimaryValue(profile1)
//    }else{
//        setAnonymousValue()
//    }
    
    if (request == "primary"){
        setValue(profile1)
    }else if (request == "secondary"){
        setValue(secondaryProfile)
    }else if (request == "anonmyous"){
        setValue(anonmyousProfile)
    }else{
        setValue(profile1)
    }
});


