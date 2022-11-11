import topNav from './components/topNav';
import {tnsCarousell, tnsSingle} from './components/tns-slider';
(()=>{
	topNav();
	tnsCarousell();
	if (document.body.classList.contains('home')) {
		tnsSingle();
	}
})();