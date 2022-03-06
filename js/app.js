document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    // Get all the balance elements

    let progress = document.getElementById("value"); 
    // Show the wallet name 
    let wallet_name = document.getElementById("wallet_name");

    // using external API to get the balance of the wallet in satoshis
    let url = "https://blockchain.info/q/addressbalance/" + wallet_name;
    let result = fetch(url);
    result.then(response => response.json())
    .then(data => {
        let balance = data;
        // show the balance in satoshis and convert to BTC
        let wallet_balance_btc = document.getElementById("wallet_balance_btc").innerHTML = 0. + data + " BTC";
        // convert satoshis to usd
        let wallet_balance_usd = document.getElementById("wallet_balance_usd").innerHTML = "$ " + ((0. + data ) * 0.0025);
    });

    // Get the account typed in the input text
    let account = document.getElementById("account").value /*= "Hello World"*/;

    /* let wallet_name = "Test Wallet"; */
    /* alert(value_progressbar); */
    // Get the balance of the account
    let balance = document.getElementById("balance");   

    addEventListener("change", () => {
        let account = document.getElementById("account").value;
        wallet_name.innerHTML = "Wallet name : " + account;
    });

    if (!!account) {
        wallet_name.innerHTML = "Wallet name : " + account;
    } else {
        wallet_name.innerHTML = "Please insert your BTC account adress.";
    }
});