<style>
.media {
      margin-top: 120px;
  }
 h2 {
    font-family: 'Baloo Bhaijaan', cursive;
    font-size: 26px;
    text-transform: uppercase;
     display: flex;
    align-items: center;
  }
  .icon img{
      width: 32px;
      margin-right: 8px;
  }
  .wrapper {
      border-radius: 4px;
      background: #FF4586;
      padding: 24px;
      position: relative;
      z-index: 2;
  }
  .wrapper:before {
      content: "";
      position: absolute;
      background: #fff;
      left:8px;
      right: -8px;
      top: 8px;
      bottom: -8px;
      display: block;
      border-radius: 4px;
      z-index: -1;
  }

  .article {
      margin-bottom: 16px;
      border-bottom: 1px solid rgba(0,0,0,.2);
      padding-bottom: 16px;
  }
  .article h3 {
      font-size: 18px;
      font-weight: 700;
      text-decoration: underline
  }
  .article span {
      color: rgba(0,0,0,.7);
      font-size: 15px;
      font-weight: 600;
      margin-top: -4px;
      display: block;
  }
  .bottom {
      border: 0;
      margin: 0;
      padding: 0;
  }
a {text-decoration: none}
</style>

<section class="media">
 <div class="row">
    <div class="col-12">
        <h2 class="title"><span class="icon"><img alt="media" src="media.png" /></span>Media</h2>
        <div class="wrapper">
            <div class="article">
            <a href="https://www.dyne.org/setup-and-running-swapi-with-bitcoin-v0-18/" target="blank">
              <h3>Setup and running swapi with bitcoin v0.18</h3>
              <span>18 March 2019</span>
            </a>
            </div>
            <div class="article">
              <a href="https://networkcultures.org/moneylab/2018/07/10/social-wallet/" target="blank">
                <h3>The collective turn in finance: On Commonfare and Social Wallet</h3>
                <span>July 10, 2018</span>
              </a>
            </div>
            <div class="article">
                <a href="https://starts-prize.aec.at/en/social-wallet/" target="blank">
                    <h3>Social Wallet @ STARTS PRIZE</h3>
                    <span>Nomination 2018</span>
                </a>
            </div>
            <div class="article">
              <a href="https://www.nesta.org.uk/blog/on-freecoin-blockchains-and-the-future-of-money-an-interview-with-jaromil/" target="blank">
                <h3>On Freecoin, Blockchains and the future of money: an interview with Jaromil</h3>
                <span>September 24, 2015</span>
              </a>
            </div>
            <div class="article">
              <a href="https://innovationorigins.com/towards-a-smart-society-is-eindhoven-ready-for-freecoin/" target="blank">
                <h3>Becoming a smart society: is Eindhoven ready for freecoin?</h3>
                <span>Mar 17, 2017 </span>
              </a>
            </div>
            <div class="article bottom">
              <a href="https://en.bitcoin.it/wiki/Freecoin" target="blank">
                <h3>SWAPI on bitcoin wiki</h3>
              </a>
            </div>
        </div>
    </div>
  </div>
</section>