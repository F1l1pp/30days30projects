document.getElementById('btn').addEventListener('click', () => {
    const arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let hexcode1 = ''
    let hexcode2 = ''
    let indexArr = 0

    for (let i = 0; i < 6; i++) {
        indexArr = Math.floor(Math.random() * arr.length)
        hexcode1 += arr[indexArr]
        indexArr = Math.floor(Math.random() * arr.length)
        hexcode2 += arr[indexArr]
    }


    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
    document.querySelector("#hexcode1").textContent = hexcode1;
    document.querySelector("#hexcode2").textContent = hexcode2;

})

