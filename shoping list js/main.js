const inp = document.querySelector('input')
    // console.log(inp)
const btn = document.querySelector('button')

const list = document.querySelector('ul')


btn.onclick = function() {
    let textinput = inp.value;
    inp.value = '';

    const autolist = document.createElement('li')
    const items = document.createElement('span')
    const nwbtn = document.createElement('button')

    items.textContent = textinput;
    autolist.appendChild(items)
    autolist.appendChild(nwbtn);
    nwbtn.textContent = '   cancel/remove';
    list.appendChild(autolist)


    nwbtn.onclick = function() {
        list.removeChild(autolist)
    }


}



console.log('made by shrey trivedi')