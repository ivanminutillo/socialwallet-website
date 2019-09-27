<style>
  .modules {
      margin-top: 120px;
  }
  h2 {
    font-family: 'Baloo Bhaijaan', cursive;
    font-size: 26px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  .description {
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
  }
  .icon img{
      width: 32px;
      margin-right: 8px;
  }
  .box {
      border-radius: 4px;
      padding:16px;
  }
  .box h3 {
      font-size: 18px;
      font-weight: 700;
  }
  .box p {
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
  }
  .box a {
    background: white;
    border: 2px solid;
    border-radius: 4px;
    padding: 3px 8px;
    font-size: 15px;
    text-decoration: none;
    font-weight: 600;
  }
  .database {
      background: #86E0FF;
  }
  .auth {
      background: #FCF3B0;
  }
  .swapi {
      background: #FFB0B0;
  }
  .app {
      background: #E5B0FF;
  }
  .strict.row [class^=col] {margin: .5rem 1%}
  .strict .col-3 {width: 23%}
</style>


<section class="modules">
<div class="row">
<div class="col-12">
  <h2 class="title"><span class="icon"><img alt="modules" src="modules.png" /></span>Modules not framework</h2>
  <p class="description">Frameworks nature is a generalist one. They often pretend to foresee user needs thanks to some kind of metrics but end up covering the most common use cases in the most predictable ways. <br /> 
Adopting the social wallet modules as building blocks, it will be easy to deploy a basic alternative currency and cover ad-hoc needs and manage design phase complexity at the same time.</p>
</div>

</div>
<div class="row strict">
  <div class="col-3">
    <div class="box database">
        <h3 class="box_title">Database</h3>
        <p>This module allows the application to connect to different kind of databases based on its needs.</p>
        <a target="blank" href='https://github.com/Commonfare-net/clj-storage'>clj-storage</a>
    </div>
  </div>
  <div class="col-3">
    <div class="box auth">
        <h3 class="box_title">Users authentication & authorization</h3>
        <p>Users can register, recover passwords and add 2FA to safely interact with currencies. providing all these features, this module gives also the chance to create user roles that can define the governance within a group.</p>
        <a target="blank" href='https://github.com/Commonfare-net/just-auth'>just-auth</a>
    </div>
  </div>
  <div class="col-3">
    <div class="box swapi">
        <h3 class="box_title">(SW)API</h3>
        <p>Our core module, it safely allows a webapp to query the database and perform operations over it. With this module you can create new transactions, add metadata such as tags and comments, query transactions, filter them and more…</p>
        <a target="blank" href='https://github.com/Commonfare-net/social-wallet-api'>swapi</a>
    </div>
  </div>
  <div class="col-3">
    <div class="box app">
        <h3 class="box_title">The webapp</h3>
        <p>The app that lets users to receive & send tokens among themselves. Tested to be used on any browser, its basic version does not require javascript to work.</p>
        <a target="blank" href='https://github.com/Commonfare-net/social-wallet'>social-wallet</a>
    </div>
  </div>
</div>
</section>