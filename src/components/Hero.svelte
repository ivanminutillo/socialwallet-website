<script>
import Header from './Nav.svelte'
</script>

<style>
.hero {
	background: #324090
}
	h1  {
	  font-family: 'Baloo Bhaijaan', cursive;
	  text-transform: uppercase;
	  font-size: 72px;
	  line-height: 66px;
	  color: #FF4586;
	  padding-top: 40px;
	}

	h3 {
		color: white;
		font-size: 23px;
		font-weight: 700;
		margin: 32px 0;
	}

	h3 img {
		width: 50px;
		margin-left: 16px;
	}

	h1 br {line-height: 0}
	p {
	  font-weight: 500;
	  font-size: 23px;
	  color: white;
	}

	p i {color: white;}

	.top {
		position: relative;
	}
	.top:before {
		content: "";
		position: absolute;
		display: block;
		height: 10px;
		background: #FF4586;
		left: 0;
		right: 60px;
		top: 0;
		border-radius: 100px;
	}
	.top:after {
		content: "";
		position: absolute;
		display: block;
		height: 10px;
		background: #FF4586;
		right: 10px;
		width: 40px;
		top: 0;
		border-radius: 100px;
	}
	
	.button {
		background: white;
		height: 60px;
		border-radius: 4px;
		color: #324090;
		font-weight: 800;
		font-size: 20px;
		width: 270px;
		text-indent: 16px;
		display: inline-block;
		line-height: 60px;
		text-align: left;
		text-decoration: none;
		margin-top: 32px;
	}

	.button img {
		width: 50px;
		float: right;
		margin-top: 25px;
		margin-right: 16px;
	}
	.inline {
		color: white;
		text-align: center;
		text-decoration: none;
		font-weight: 800;
		display: inline-block;
		margin: 16px 0;
		margin-bottom: 0;
	}

	.inline u {
		color: white;
		font-size: 20px;
		margin-left: 4px;
	}
	.right {
		text-align: right
	}
	.logo {
		width: 80%;
	}
</style>

<section class="hero">
<Header />
<div class="container">
<div class="row">
    <div class="col-6">
    <h1 class="top">The <br />
    social <br />
    wallet</h1>
    <p>Design and manage currencies in a simple and secure way. <br />Made for participatory and democratic organisations aiming to incentivise participation <i>- differently to centralised banking systems -</i> and experiment with different economic models.</p>
    <h3>Get in touch with us <span><img src="arrow-white.png" alt="arrow" /></span></h3> 
	</div>

    	<div class="col-6 right">
		<img src="swlogo.png" alt="logo" class="logo"/>
		  <a href="https://socialwallet.dyne.org/" target="blank" class="button">Try a demo <span><img src="arrow.png" alt="arrow" /></span></a>
		  <br />
		  <a href="https://dcentproject.eu/wp-content/uploads/2015/05/D4.4-final_v4.pdf" target="blank" class="inline">or <u>read the white paper</u></a>
		</div>
	</div>
    </div>
</section>