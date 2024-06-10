<script>
    import Header from "../header.svelte";
</script>

<style>
     @font-face {
        font-family: "Juventus Fans Bold";
        src: url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.eot");
        src: url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/b4ccc98add6cc60de17dbb589dca2164.svg#Juventus Fans Bold")format("svg"); } 
    
    body {
        font-family: Arial, sans-serif;
        background-color: #000000;
        color: #ffffff;
        margin: 0;
        padding: 0;
    }


    .container {
        padding: 40px 20px;
    }

    h1, h2 {
        color: #03E671;
        font-family: "Juventus Fans Bold";
    }

    .section-content {
        margin-bottom: 30px;
    }

    #cotent{
        margin-left: 5vw;
        width: 90vw;
    }
</style>

<body>
    <Header></Header>

    <div id="cotent">
    <div class="container">
        <section id="our-policies" class="section-content">
            <h1>Our policies</h1>
            <p>At SecureTech Solutions, safeguarding our clients data is our highest priority. We adhere to industry best practices and employ robust security measures to ensure that all sensitive information is protected against unauthorized access. Our security policies are designed to maintain the confidentiality, integrity, and availability of data, and are continuously reviewed and updated to address evolving threats.</p>
        </section>

        <section id="data-encryption" class="section-content">
            <h2>Data Encryption and Storage</h2>
            <p>We understand that the security of user credentials is critical. To protect this sensitive information, we use advanced encryption techniques. To manage the encryption process efficiently, we use a proprietary Python script that automates the encryption of the passwords to the user. This script is securely stored within the company files.</p>
        </section>

        <section id="compliance" class="section-content">
            <h2>Compliance and Auditing</h2>
            <p>To ensure our security measures meet industry standards, we regularly undergo independent security audits and compliance assessments. We are committed to maintaining compliance with relevant regulations and standards, such as GDPR, HIPAA, and ISO/IEC 27001.</p>
            <p>By implementing these comprehensive security measures, SecureTech Solutions ensures that our clients’ data is protected against unauthorized access and cyber threats. Our commitment to security is unwavering, and we continuously strive to enhance our practices to stay ahead of emerging threats.</p>
        </section>
    </div>
    </div>
</body>