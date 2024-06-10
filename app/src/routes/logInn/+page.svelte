<script>
    import Header from "../header.svelte"

    let passord = ""
    let brukernavn = ""
    let feilmelding = "    "
    function loginn(){
        fetch('/Yolo' + brukernavn + passord + ".txt")
        .then(function (h) {
            console.log("FIKK SVAR", h);
            if (h.ok){
              //  location.href = h.url;
                 h.text().then(function(txt) {feilmelding = txt})
            }
            else{
                feilmelding = "Wrong username or password"
            }  
        });
    }
</script>

<body>
    <Header></Header>

    <div id="conteiner">
        <h1>Logg inn</h1>
        <div id="boks">
            <h2>Username:</h2>
            <input type="text" bind:value={brukernavn}>
        </div>
        <div id="boks">
            <h2>Password:</h2>
            <input type="text" bind:value={passord}>
        </div>

        <div id="feilmelding">{feilmelding}</div>
        <button on:click={loginn}>Log inn</button>
    </div>
</body>

<style>
    body{
        background-color: black;

    }

    @font-face {
        font-family: "Juventus Fans Bold";
        src: url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.eot");
        src: url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.svg#Juventus Fans Bold")format("svg"); 
    } 

    h1 {
      color: #03E671;
      font-family: "Juventus Fans Bold";
      font-size: 6vw;
    }

    #conteiner{
        margin-left: 5vw;
        margin-top: 10vw;
    }

    h2{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: #fff; 
    }

    #boks{
        display: flex;
        flex-direction: row;
        width: 35vw;
        justify-content: space-between;
        align-items: center;
    }

    input{
        height: 1.5vw;
        width: 25vw;
        border-radius: 0.5vw;
        opacity: 80%;
    }

    button {
      background-color: #03E671;
      color: #000000;
      padding: 15px 25px;
      text-align: center;
      display: inline-block;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 20px;}

    #feilmelding{
        color: red;
        height: 3vw;
        font-size: large;
    }


    
    

</style>