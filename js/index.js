const btnClickJacking = document.getElementById('btnClickJacking');


function setBtnEvent() {
    btnClickJacking.addEventListener('click', () => {
        const result = window.confirm("open");
        if (result) {
            location.href = "../page/clickjacking.html";
        }
    });
}


setBtnEvent();