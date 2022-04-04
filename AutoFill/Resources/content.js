const primary = "primary"

const setPrimaryValue = () =>
{
    fill("email", "pandi@mailinator.com")
    fill("password", "pandi@123")
    fill("firstName", "Pandiyaraj")
    fill("lastName", "M")
    fill("phone", "9876543210")
    fill("address1", "No 10, Jeevan nagar")
    fill("address2", "Adampakkam")
    fill("city", "Chennai")
    fill("state", "Tamil Nadu")
}

const setAnonymousValue = () =>
{
    fill("email", "anonymous@gmail.com")
    fill("password", "sample@123")
    fill("firstName", "Anonmyous")
    fill("lastName", "Info")
    fill("phone", "9876543210")
    fill("address1", "No1 South African Shop")
    fill("address2", "Area")
    fill("city", "chennai")
    fill("state", "Tamil Nadu")
}

function fill(name, value) {
    if (document.querySelector(`input[autocomplete*=${name} i]`)) {
        fillByAttributeName(name, value, "autocomplete")
        fillByAttributeName(name, value, "name");
    } else if (document.querySelector(`[name*=${name} i]`)) {
        fillByAttributeName(name, value, "name");
    } else if (document.querySelector(`[id*=${name} i]`)) {
        fillByAttributeName(name, value, "id");
    } else if (document.querySelector(`[placeholder*=${name} i]`)) {
        fillByAttributeName(name, value, "placeholder");
    }
}

function fillByAttributeName(name, value, attribute) {
    let elements = document.querySelectorAll(`[${attribute}*=${name} i]`);
    
    elements.forEach(function (element) {
        autofill(element, value);
    });
}
function autofill(element, value) {
    let event = document.createEvent("HTMLEvents");
    event.initEvent('change', true, false);
    element.focus();
    element.value = value;
    element.dispatchEvent(event);
    element.blur();
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//        setPrimaryValue()
//    if (request.key == primary){
        setPrimaryValue()
//    }else{
//        setAnonymousValue()
//    }
});

