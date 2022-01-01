var str = ""

document.querySelector('.form-1').style.display='none';
document.querySelector(".nav-utility").addEventListener('click',function () {
    document.querySelector('.form-1').style.display='block';
    document.querySelector('.btn-utility').addEventListener('click',function () {
        str = document.querySelector('.in-utility').value;
        document.querySelector('.form-1').style.display='none';
        const txt = document.createTextNode(str);
        const tag = document.createElement('div');
        tag.appendChild(txt);
        document.querySelector('.util-bills').appendChild(tag)
        document.querySelector('.in-utility').value = ''
    })
})

