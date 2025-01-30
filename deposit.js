const back = document.getElementById('back');
back.addEventListener('click', function() {
    history.back();
});

document.getElementById('deposit').addEventListener('click', function(e) {
    e.preventDefault(); 

    
    let depositAmount = parseFloat(document.getElementById('depositMe').value); 

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    depositAmount *= 100; 

    
    const minDepositAmounts = {
        "NGN": 1500 * 100,
    };

    const minDeposit = minDepositAmounts[currency] || 1500 * 100; 

    if (depositAmount < minDeposit) {
        alert(`Minimum deposit for NGN is ${minDeposit / 100}.`);
        return;
    }

    let paymentDetails = {
        key: 'pk_test_9b2f9f60021d75c2ef1ebbddaf0c58d33065c683', 
        email: 'carmenjosh@gmail.com', 
        amount: depositAmount, 
        currency: 'NGN', 
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), 
        callback: function(response) {
            alert('Payment successful. Transaction reference: ' + response.reference);
        },
        onClose: function() {
            alert('Transaction was not completed.');
        }
    };

    var handler = PaystackPop.setup(paymentDetails);
    handler.openIframe(); 
});
