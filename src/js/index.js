import topNav from './components/topNav';
import { tnsCarousell, tnsSingle, tnsPromotion } from './components/tns-slider';
import modal from './components/modal-login';
// import bonus from './components/bonus';

(() => {
	modal;
	topNav();
	if (document.body.classList.contains('home')) {
		tnsSingle();
		tnsPromotion();
		tnsCarousell();
	}
	else if (document.body.classList.contains('Bonus')) {
		bonus;
	}
})();