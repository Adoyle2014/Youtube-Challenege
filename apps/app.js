$(document).ready(function() {


	ajaxLesson();
	

	function ajaxLesson() {
		userQuery = "";

		

		$("#button").on('click', function(e) {
			e.preventDefault();
			searchTerm = $("#query").val();			
			getRequest(searchTerm);

		});

		function getRequest(searchTerm){
	  		var params = {
	    		part: 'snippet',
	    		key: 'AIzaSyDM9phtsd2BSBMrzDcwTDy-AE51tZO-qr8',
	    		q: searchTerm,
	    		maxResults:'50'
	    		};
	  		url = 'https://www.googleapis.com/youtube/v3/search';

			$.getJSON(url, params, function(data){
				console.log(data);
				showResults(data);

			});
		}

		/*function showResults(results){
    			var html = "";
    			var utubeVideoUrl = "https://www.youtube.com/watch?v=";
    			
	    		
	    		for (i = 0; i < 5; i++) {
	    			var titleTag = ('<div class="results"><a href="' + utubeVideoUrl + (results.items[i]).id.videoId + '" target="_blank"><p class="result-title">' + (results.items[i]).snippet.title + '</p><img class="result-image" src="' + (results.items[i]).snippet.thumbnails.default.url + '"></a></div>')	
	    			html += titleTag;	      		
	    		}
    			$('#search-results').html(html);
  		}*/

  		function showResults(results){
    			var html = "";
    			var utubeVideoUrl = "https://www.youtube.com/watch?v=";
    			
	    		
	    		for (i = 0; i < 5; i++) {
	    			var titleTag = ('<div class="results"><a href="' + utubeVideoUrl + (results.items[i]).id.videoId + '" target="_blank"><p class="result-title">' + (results.items[i]).snippet.title + '</p><img class="result-image" src="' + (results.items[i]).snippet.thumbnails.default.url + '"></a></div>')	
	    			html += titleTag;	      		
	    		}
    			$('#search-results').html(html);
  		}
	}
});
	
