const infoDetail = [
{
name: "Rohan",
code: '#FA96A7',
key:"primary"
}
,{
name: "Harsha",
code: '#F28500',
key: "secondary"
},{
name: "Anonmyous",
code: '#A2A9B1',
key: "anonmyous"
}
]

const sendInfo = async (info) => {
const [tab] = await browser.tabs.query({currentWindow: true, active: true})
chrome.tabs.sendMessage(tab.id, info)
}
infoDetail.forEach(infoObj => {
const button = document.createElement('button')
button.style.background = infoObj.code
button.innerText = infoObj.name
button.id = infoObj.key
document.querySelector('#info-container').appendChild(button)
button.addEventListener('click', e => {
    sendInfo(infoObj.key)
})
})
