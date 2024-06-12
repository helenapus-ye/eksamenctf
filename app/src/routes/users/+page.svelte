<script>
    
    import { createClient } from "@sanity/client";
    import Header from "../header.svelte";
    import imageUrlBuilder from "@sanity/image-url";

    const client = createClient({
        projectId: "xprczpyr",
        dataset: "production",
        apiVersion: "2021-10-21",
        useCdn: false
    });
    const builder = imageUrlBuilder(client)
    
    /**
   * @param {import("@sanity/image-url/lib/types/types").SanityImageSource} source
   */
    export function urlFor(source) {
        return builder.image(source)
    }


    // @ts-ignore
    export async function loadbrukere() {
        
        const data = await client.fetch(`*[_type == "brukere"]`);
       
        if (data) {
            brukere = data;
            return brukere;
        }
        return {
            status: 500,
            body: new Error("Internal Server Error")
        };
    }
    
    
    /**
   * @type {any[]}
   */
    export let brukere = [];


    loadbrukere()


    
</script>

<body>
    <Header></Header>

    <div id="innhold">
        <h1>Users</h1>
        <h3>her is a list of the users in the company</h3>

        {#each brukere as user }
            <div id="userbox">
                <img id="profilbilde" alt="" src={urlFor(user.bilde).url()} >
                <div id="tekst">
                    <h4>Username: {user.brukernavn} </h4>
                    <h4>Encrypted password: {user.krypterpassord}</h4>
                </div>
            </div>
        {/each}
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

    h3{
        color: #fff;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin-top: -4vw;
    }

    #innhold{
        margin-left: 5vw;
    }

    #userbox{
        height: 7vw;
        width: 87vw;
        background-color: #fff;
        border-radius: 1vw;
        margin-top: 2vw;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #profilbilde{
        width: 4vw;
        height: 4vw;
        margin-left: 1vw;
    }

    #tekst{
        display: flex;
        flex-direction: column;
        height: 4vw;
        margin-top: 2.5vw;
        margin-left: 2vw;
    }

    h4{
        margin-top: -1vw;
    }
</style>