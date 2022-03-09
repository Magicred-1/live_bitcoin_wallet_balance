document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    // Catch the wallet name element and set it to the wallet name
    let wallet_name = document.getElementById("wallet_name")
    wallet_name.innerHTML = "Please insert your BTC account adress.";

    // Verification of the wallet address using regex
    let bitcoinAdressRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
    

    // Change the value of the wallet name
    addEventListener("change", () => {
        let account = document.getElementById("account").value;
        // First we verify if the account is valid
            if (account && account.match(bitcoinAdressRegex)) {

                // If the account is valid we set the wallet name
                wallet_name.innerHTML = "Wallet name : " + account;

                // We insert the wallet both BTC & USD balance into the DOM
                let infos = document.getElementById('wallet_name');
                infos.insertAdjacentHTML('beforeend', '<p id="wallet_balance_btc"></p><p id="wallet_balance_usd"></p>');

                // Using external API to get the balance in satoshi selected wallet
                let url = "https://blockchain.info/q/getreceivedbyaddress/";
                url += account;
                // Example : url += "3GKzR29LdyXg8Vao8Mni4MkyrTKXyeDbfN";
                url += "?confirmations=0";

                // Fetching the balance from the API
                let result = fetch(url);
                result.then(response => response.json())
                .then(data =>   {
                    // Getting the response in a variable
                    let balance = data;

                    // Show the balance in satoshis and convert to BTC
                    let wallet_balance_satoshis 
                    let wallet_balance_btc =  document.getElementById("wallet_balance_btc").innerHTML = "0." + data + " <em class=\"fa-brands fa-btc\"></em>";

                    // Convert satoshis to usd
                    // Formula for calculating the price based on the amount of satoshis
                    // [USD/BTC] * [BTC/SAT] * [SAT/1]
                    let formula;
                    let wallet_balance_usd = document.getElementById("wallet_balance_usd").innerHTML = "$ " + ((0. + data ) * 0.0025);
                });
            } else {
                wallet_name.innerHTML = "Please insert a valid BTC account adress.";
            }
    });
});

// made by @djasongadiou