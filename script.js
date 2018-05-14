window.onload = function () {
	handleToggle('menu1', 'menu', 'myTopnav');
	handleToggle('menu3-1', 'news', 'myTop');
	handleToggle('menu3-2', 'news_2', 'myToplast');
	handleToggle('menu3-3', 'news_3', 'myTopnews');

	function handleToggle(targetBtnId, menuClass, menuId) {
		document.getElementById(targetBtnId).onclick = function() {
			var x = document.getElementById(menuId);
			if (x.className === menuClass) {
				x.className += " responsive";
			} else if (x.className === menuClass + " responsive") {
				x.className = menuClass;
			}			
		}		
	}
}