

//                 ADD UTILITY BILLS


var str = "";
document.querySelector('.form-1').style.display='none';
document.querySelector(".nav-utility").addEventListener('click',function () {
    document.querySelector('.form-1').style.display='block';
    document.querySelector('.btn-utility').addEventListener('click',function () {
        str = document.querySelector('.in-utility').value;
        str += ' on ';
        str += document.querySelector('.date-utility').value.split("").reverse().join("");
        document.querySelector('.form-1').style.display='none';
        const txt = document.createTextNode(str);
        const tag = document.createElement('div');
        tag.classList.add('bill-item')
        tag.appendChild(txt);
        document.querySelector('.util-bills').appendChild(tag)
        document.querySelector('.in-utility').value = ''
    })
    document.querySelector(".nav-utility").addEventListener('click',function () {
        document.querySelector('.form-1').style.display='none';
    })
})


//                  RECURRING SUBSCRIPTIONS


var str2 = ''
document.querySelector('.form-3').style.display = 'none';
document.querySelector('.nav-recurr').addEventListener('click',function() {
    document.querySelector('.form-3').style.display = 'block';
    document.querySelector('.btn-recurr').addEventListener('click',function () {
        document.querySelector('.form-3').style.display = 'none';
    })
    document.querySelector('.nav-recurr').addEventListener('click',function() {
        document.querySelector('.form-3').style.display = 'none';
    })
})


//                  WALLET RECHARGE


var str1 = ""
document.querySelector(".form-2").style.display = 'none';
document.querySelector(".nav-wallet").addEventListener('click',function () {
    document.querySelector(".form-2").style.display = 'block';
    document.querySelector(".btn-wallet").addEventListener("click",function() {
        str1 = document.querySelector('.in-recharge').value;
        // console.log(str1);
        let bal = document.querySelector('.balance').textContent;
        // console.log(bal)
        bal = +bal + +str1;
        // console.log(bal)
        document.querySelector('.balance').textContent = bal;
        document.querySelector(".form-2").style.display = 'none';
    })
    document.querySelector(".nav-wallet").addEventListener('click',function () {
        document.querySelector(".form-2").style.display = 'none';
    })
})
