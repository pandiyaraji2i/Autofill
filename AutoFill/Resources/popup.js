const infoDetail = [
{
name: "Fill Info",
code: '#FA96A7',
key:"primary"
}/*,{
name: "Anonmyous",
code: '#F28500',
key: "anonmyous"
}*/]

const sendInfo = async (info) => {
const [tab] = await browser.tabs.query({currentWindow: true, active: true})
chrome.tabs.sendMessage(tab.id, { info })
}
infoDetail.forEach(info => {
const button = document.createElement('button')
button.style.background = info.code
button.innerText = info.name
document.querySelector('#container').appendChild(button)
button.addEventListener('click', e => {
    sendInfo(info.key)
})
})
