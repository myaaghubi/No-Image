
function handleIMGS(textNode) {
	try {
		var _allImagesList_ = textNode.getElementsByTagName('img');

		for(var i = 0; i < _allImagesList_.length; i++)
		{
			var address = _allImagesList_[i].src;
			_allImagesList_[i].classList.add("needtoloadimagestyle");
			_allImagesList_[i].addEventListener('click', function (e) {
				var img = document.createElement('img');
				var timestamp = new Date().getTime();
				//img.setAttribute('src', address+"?i_fix="+timestamp);
				//e.target.appendChild(img);
				this.src=this.src+"?i_fix="+timestamp;
				this.classList.remove("needtoloadimagestyle");
			});
		}
	} catch (error){
		console.log("e: "+error);
	}
}
var localStorageIsOn="0"
chrome.storage.sync.get('localStorageIsOn', function(items){
    localStorageIsOn = items['localStorageIsOn'];
	if (localStorageIsOn=="1") {
		handleIMGS(document);
	}
	chrome.storage.local.clear(function() {});
});