// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
		/*if(obj.detail.command === 'PRIVMSG') {
      document.querySelectorAll('.chat-user-badges').forEach(function(element, index){
        element.style.setProperty('--badges', obj.detail.tags.badges.split(',').length)
      })
    }*/
});
