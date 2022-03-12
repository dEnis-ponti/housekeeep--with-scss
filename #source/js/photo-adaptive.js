console.log(document.documentElement.clientWidth);

const diagnosticVarPicFirst = document.querySelector('.diagnostic-var__pic_first');
const diagnosticVarPicSecond = document.querySelector('.diagnostic-var__pic_second');

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        resize_info();
    };
});

function resize_info()
{
    if (document.documentElement.clientWidth <= 620) {
    diagnosticVarPicFirst.setAttribute('src', '/img/diagnostic-with-repair_mobile.png');
    } else {
      diagnosticVarPicFirst.setAttribute('src', '/img/diagnostic-with-repair.png');
    }

    if (document.documentElement.clientWidth <= 620) {
      diagnosticVarPicSecond.setAttribute('src', '/img/diagnostic-without-repair_mobile.png');
    } else {
      diagnosticVarPicSecond.setAttribute('src', '/img/diagnostic-without-repair.png');
    }
}