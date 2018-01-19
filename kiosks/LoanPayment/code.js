// Copyright 2017 Karl Castleton
function update() {
    // http://financeformulas.net/Loan_Payment_Formula.html
    PV=document.getElementById('PV').value;
    r=document.getElementById('r').value/100.0/12.0;
    document.getElementById('rDisplay').value=document.getElementById('r').value;
    n=document.getElementById('n').value*12.0;
    document.getElementById('nDisplay').value=document.getElementById('n').value;
    I=document.getElementById('i').value;
    document.getElementById('iDisplay').value=document.getElementById('i').value;
    P=r*(PV)/(1-Math.pow(1+r,-n));
    document.getElementById('P').value=P.toFixed(2);
    TI=P*n-PV;
    document.getElementById('TI').value=TI.toFixed(2);
    PI=P*100.0/I;
    document.getElementById('PI').value=PI.toFixed(2);
    RI=I-P;
    document.getElementById('RI').value=RI.toFixed(2);
}

function amount(newAmount) {
    document.getElementById('PV').value=newAmount;
    update();
}
