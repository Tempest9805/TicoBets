import topNav from './components/topNav';
import { tnsSingle, carouselPromotions } from "./components/tns-slider";
import tabs from './components/tabs';
import accordion from './components/accordion'; 
import modal from './components/modal-login';
import {initAcc} from './components/dropdown';
import tablecaballos from './components/tablecaballos';


(() => {
	modal;
	topNav();
	if (document.body.classList.contains('home')) {
		tnsSingle();
	} else if (document.body.classList.contains('Banca')) {
		tabs();
	} else if (document.body.classList.contains('ReglasDeportes')) {
		accordion();
	} else if (document.body.classList.contains('bonus')) {
		carouselPromotions();
	} else if (document.body.classList.contains('ReglasDeportes')) {
		initAcc();
	} else if (document.body.classList.contains('caballos')) {
		tablecaballos();
	}
})();
