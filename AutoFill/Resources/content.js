const primary = "primary"

const setPrimaryValue = () =>
{
    fill("email", "hiring@iomd.info")
    fill("password", "test@123")
    fill("firstName", "Rohan")
    fill("first_name", "Rohan")
    fill("lastName", "Mahadevan")
    fill("last_name", "Mahadevan")
    fill("phone", "4085551212")
    fill("location", "900 Menlo Oaks Drive")
    fill("address1", "900 Menlo Oaks Drive")
    fill("street", "900 Menlo Oaks Drive")
    fill("city", "Menlo Park")
    fill("country", "US")
    fill("state", "CA")
    fill("postalCode", "94025")
    fill("postCode", "94025")
    fill("postal-Code", "94025")
    
    fill("cc-number", "5459612890007890")
    fill("credit-card-number", "5459612890007890")
    fill("creditcardnumber", "5459612890007890")
    fill("cardnumber", "5459612890007890")
    fill("encryptedCardNumber", "5459612890007890")
   
    fill("cs-csc","123")
    fill("cvv","123")
    fill("encryptedSecurityCode","123")
    
    fill("cc-exp","04/24")
    fill("expirationDate","04/24")
    fill("expiration","04/24")
    fill("encrptedExpiryDate","04/24")
   
}

const setSecondaryValue = () =>
{
    fill("email", "test3.ideas2it@iomd.info")
    fill("password", "test@123")
    fill("firstName", "Harsha")
    fill("first_name", "Harsha")
    fill("lastName", "Ideas2it")
    fill("last_name", "Ideas2it")
    fill("phone", "4085551212")
    fill("location", "361 Linfield drive")
    fill("address1", "361 Linfield drive")
    fill("street", "361 Linfield drive")
    fill("city", "Menlo Park")
    fill("country", "US")
    fill("state", "CA")
    fill("postalCode", "94025")
    fill("postCode", "94025")
    fill("postal-Code", "94025")
   
    fill("cc-number", "5459612890007174")
    fill("credit-card-number", "5459612890007174")
    fill("creditcardnumber", "5459612890007174")
    fill("cardnumber", "5459612890007174")
    fill("encryptedCardNumber", "5459612890007174")
    
    fill("cs-csc","456")
    fill("cvv","456")
    fill("encryptedSecurityCode","456")

    
    
    fill("cc-exp","07/22")
    fill("expirationDate","07/22")
    fill("encrptedExpiryDate","07/22")
    fill("expiration","07/22")
   
    
}

const setAnonymousValue = () =>
{
    fill("email", "test2.ideas2it@iomd.info")
    fill("password", "test@123")
    fill("firstName", "Test2")
    fill("first_name", "Test2")
    fill("lastName", "Ideas2it")
    fill("last_name", "Ideas2it")
    fill("phone", "4085551212")
    fill("location", "Belle Haven Branch Library")
    fill("address1", "Belle Haven Branch Library")
    fill("street", "Belle Haven Branch Library")
    fill("city", "Menlo Park")
    fill("country", "US")
    fill("state", "CA")
    fill("postalCode", "94025")
    fill("postCode", "94025")
    fill("postal-Code", "94025")
   
    fill("cc-number", "4207399013131009")
    fill("credit-card-number", "4207399013131009")
    fill("creditcardnumber", "4207399013131009")
    fill("cardnumber", "4207399013131009")
    fill("encryptedCardNumber", "4207399013131009")
   
    fill("cs-csc","345")
    fill("cvv","345")
    fill("encryptedSecurityCode","345")
    
    fill("cc-exp","04/23")
    fill("expirationDate","04/23")
    fill("expiration","04/23")
    fill("encrptedExpiryDate","04/23")
    
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

//browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    alert("requsting", request)
////        setPrimaryValue()
////    if (request.key == primary){
//        setPrimaryValue()
////    }else{
////        setAnonymousValue()
////    }
//});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    alert("Test")
//    alert(JSON.stringify(request))
//    alert(request)
    if (request == "primary"){
        setPrimaryValue()
    }else if (request == "secondary"){
        setSecondaryValue()
    }else if (request == "anonmyous"){
        setAnonymousValue()
    }else{
        setPrimaryValue()
    }
    
});

