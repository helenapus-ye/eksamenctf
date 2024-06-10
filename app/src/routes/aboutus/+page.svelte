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
    margin-left: 6vw;
    width: 85vw;
  }

  h1 {
      color: #03E671;
      font-family: "Juventus Fans Bold";
  }

  h2 {
      color: #03E671;
      font-family: "Juventus Fans Bold";
  }

  .download-button {
      background-color: #03E671;
      color: #000000;
      padding: 15px 25px;
      text-align: center;
      display: inline-block;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 20px;
  }

  .download-button:hover {
      background-color: #03E671;
  }
</style>

<body>
  <Header></Header>
  <div class="container">
    <section id="about">
        <h1>About us</h1>
        <p>SecureTech Solutions was founded in 2010 by cybersecurity experts with a mission to make the digital world safer. With over a decade of experience, they have helped numerous companies fortify their defenses against cyber attacks. Their team of certified professionals is committed to staying ahead of emerging threats and providing top-notch security solutions.</p>
    </section>

    <section id="services">
        <h2>Services</h2>
        <ul>
            <li><strong>Vulnerability Assessments:</strong> Comprehensive scanning and analysis to identify security weaknesses in systems and networks.</li>
            <li><strong>Penetration Testing:</strong> Simulated cyber attacks to evaluate the security of systems and uncover potential vulnerabilities.</li>
            <li><strong>Incident Response:</strong> Rapid response services to contain and mitigate the impact of cyber incidents.</li>
            <li><strong>Managed Security Services:</strong> Ongoing monitoring and management of security systems to ensure continuous protection.</li>
            <li><strong>Security Training:</strong> Customized training programs to educate employees on best practices for maintaining security.</li>
        </ul>
    </section>

    <section id="products">
        <h2>Products</h2>
        <ul>
            <li><strong>SecureGuard:</strong> An advanced intrusion detection and prevention system that uses AI to identify and block threats in real-time.</li>
            <li><strong>PhishBlocker:</strong> A robust email security solution designed to detect and prevent phishing attacks.</li>
            <li><strong>DataVault:</strong> A secure data storage solution that offers encryption and access control to protect sensitive information.</li>
        </ul>
    </section>

    <section id="careers">
        <h2>Careers</h2>
        <p>Join our team of cybersecurity experts and help us build a safer digital world. We are always looking for talented individuals who are passionate about security. Visit our Careers page for current openings.</p>
    </section>

    <section id="read-more">
        <h2>Read more</h2>
        <p>If you are looking for more information about our team, look in the files below. Somewhere in this files you can find a folder named employees, where you can find every employee and information about them and their position in the company. The files is quite messy and it can be hard to find information you’re looking for.</p>
        <a href="/" class="download-button">Download company files</a>
    </section>
  </div>
</body>