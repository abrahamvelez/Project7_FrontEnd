/*jQuery(document).ready(function($) {
    $('#player1').mediaelementplayer();
});*/

$('#mediaplayer').mediaelementplayer({
    	pluginPath: "video/video.mp4",
    	success: function(mediaElement, originalNode) {
	        // do things
        }
    });
