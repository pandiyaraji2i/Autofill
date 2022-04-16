function useProfile(profile) {
    inputFields = document.querySelectorAll(`
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="tel"],
        input[type="hidden"],
        select`)
    inputFields.forEach( (element) => {
        fillFields(profile, element)
    })
    checkboxes = document.querySelectorAll(`input[type="checkbox"]`)
    checkboxes.forEach( (checkbox) => {
        if (checkbox.name.toLowerCase().includes("consent")) {
            if (checkbox.checked == false){
                checkbox.click()
            }
        }
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
    cardName: "Rohan Mahadevan",
    cardnumber:"4111 1111 1111 1111",
    expiry: "04/24",
    cvv: "123"
}

secondaryProfile = {
    email: "test1.ideas2it@iomd.info",
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
    cardName: "Harsha Elchuri",
    cardnumber:"6011 1111 1111 1117",
    expiry: "07/22",
    cvv: "123"
}

indiaProfile = {
    email: "test3.ideas2it@iomd.info",
    password: "test@123",
    firstName: "India",
    lastName: "Test",
    phone: "4085551212",
    address1: "52, RR Towers V",
    address2: "Guindy",
    city: "Chennai",
    country: "IN",
    state: "Tamil Nadu",
    postalCode: "600044",
    cardName: "India Test",
    cardnumber:"4111 1111 1111 1111",
    expiry: "07/24",
    cvv: "123"
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
    cardName: "Test2 Ideas2it",
    cardnumber:"3530 1113 3330 0000",
    expiry: "04/23",
    cvv: "123"
}

let fieldNames = {
    email: ["email"],
    phone: ["phone", "mobile"],
    password: ["password"],
    firstName: ["firstname", "first name", "first_name", "first-name", "first", "fname"],
    lastName: ["lastname", "last name", "last_name", "last-name", "last", "lname"],
    address1: ["address1", "address 1", "address line 1", "location"],
    address2: ["address2", "address 2", "address line 2", "street2"],
    city: ["city"],
    state: ["state", "region", "zone"],
    country: ["country"],
    postalCode: ["postal", "postcode", "pincode", "zip", "post-code", "post", "post_code"],
    cardName: ["cc-name", ],
    cardnumber: ["cc-number", "credit-card-number", "creditcardnumber", "cardnumber", "encryptedcardnumber"] ,
    expiry : ["expiry", "cc-exp", "expirationDate", "expiration", "encryptedexpirydate", "MM/YY"],
    cvv: ["csc", "cvv", "securitycode"]
}

function autofill(element, profile, field) {
    let event = document.createEvent("HTMLEvents");
    event.initEvent('change', true, false);
    element.focus();
    if (field.includes("cardnumber")) {
        simulateTyping(event, element, profile[field], 0);
    } else {
        element.value = profile[field];
        element.dispatchEvent(event);
    }
    element.blur();
}

function simulateTyping(event, element, value, i) {
    if (i < value.length) {
        if (element.value.length === value.length) {
            element.value = ""
        }
        element.value += value.charAt(i);
        element.dispatchEvent(event);
        setTimeout(() => {
            i++;
            simulateTyping(event, element, value, i);
        }, 10);
    }
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request == "primary"){
        useProfile(profile1)
    }else if (request == "secondary"){
        useProfile(secondaryProfile)
    }else if (request == "anonmyous"){
        useProfile(anonmyousProfile)
    }else if (request == "india"){
        useProfile(indiaProfile)
    }else{
        useProfile(profile1)
    }
});
