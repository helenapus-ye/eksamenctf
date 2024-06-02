<script>
    import Header from '../routes/header.svelte';
    import Bilde from '../../static/låsbilde.png';
</script>

<body>
   <div id="alt">
        <Header></Header>

        <div>
            <div id="inhold">
                <h1>Try to hack us</h1>
                <div id="tekst">
                    To get the flag you need to log inn as administrator
                    to the company. Se if you can find out who the admin
                    is and what their password is? Try navigating around 
                    the website and gather information. 
                </div>
                <div id="tekst" class="goodluck">Good luck🍀</div>
            </div>  
            <enhanced:img src={Bilde} alt="bilde av lås" id="bilde" />
        </div>

       

    </div> 
</body>



<style>
    body{
      background-color: black;  
    }
    #alt{
        width: 100vw;
        height: 100vh;
        background-image: url("backgroundHome.png");
        
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

    h1{
        font-family: "Juventus Fans Bold";
        font-size: 6vw;
        color: #03E671;
        
    }

    #inhold{
        display: flex;
        justify-self: center;
        flex-direction: column;
        margin-left: 6vw;
        margin-top: 5vw;
    }

    #tekst{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:x-large;
        color: #fff;
        width: 50vw;
        line-height: 3vw;
    }

    .goodluck{
        margin-top: 4vw;
    }

    #bilde{
        width: 40vw;
        height: 40vw;
    }


</style>