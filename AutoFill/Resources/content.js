const primary = "primary"

const setPrimaryValue = () =>
{
    fill("email", "hiring@iomd.info")
    fill("password", "pandi@123")
    fill("firstName", "Rohan")
    fill("lastName", "Mahadevan")
    fill("phone", "4085551212")
    fill("address1", "900 Menlo Oaks Drive")
    fill("street", "900 Menlo Oaks Drive")
    fill("city", "Menlo Park")
    fill("country", "US")
    fill("state", "CA")
    fill("postalCode", "94025")
    fill("postCode", "94025")
}

const setAnonymousValue = () =>
{
    fill("email", "test1.ideas2it@iomd.info")
    fill("password", "sample@123")
    fill("firstName", "Rohan")
    fill("lastName", "Mahadevan")
    fill("phone", "4085551212")
    fill("address1", "361 Linfield drive")
    fill("city", "menlo park")
    fill("state", "ca")
    fill("country", "United States")
    fill("postalCode", "94025")
}

function fill(name, value) {
    if (document.querySelector(`[autocomplete*=${name} i]`)) {
        fillByAttributeName(name, value, "autocomplete")
        return fillByAttributeName(name, value, "name");
    } else if (document.querySelector(`[name*=${name} i]`)) {
        return fillByAttributeName(name, value, "name");
    } else if (document.querySelector(`[id*=${name} i]`)) {
        return fillByAttributeName(name, value, "id");
    } else if (document.querySelector(`[placeholder*=${name} i]`)) {
        return fillByAttributeName(name, value, "placeholder");
    } else if (name.includes("email") && document.querySelector(`[type*=${name} i]`)) {
        return fillByAttributeName(name, value, "type");
    }
}

function fillByAttributeName(name, value, attribute) {
    let elements = document.querySelectorAll(`[${attribute}*=${name} i]`);
    
    elements.forEach(function (element) {
        return autofill(element, value);
    });
}

function autofill(element, value) {
    let event = document.createEvent("HTMLEvents");
    event.initEvent('change', true, false);
    element.focus();
    element.value = value;
    element.dispatchEvent(event);
    element.blur();
    return element
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//        setPrimaryValue()
//    if (request.key == primary){
        setPrimaryValue()
//    }else{
//        setAnonymousValue()
//    }
});

