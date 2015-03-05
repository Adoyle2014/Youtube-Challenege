$(document).ready(function() {


	ajaxLesson();

	

	function ajaxLesson() {
		userQuery = "";
		dataReturn = {};
		currentPage = 1

		$("#button").on('click', function(e) {
			e.preventDefault();
			searchTerm = $("#query").val();			
			getRequest(searchTerm);

		});

		$("#forward").on('click', function() {
			
			currentPage++;
			showResults(dataReturn, currentPage);

		})

		$("#backward").on('click', function() {
			
			currentPage--;
			showResults(dataReturn, currentPage);

		})

		

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
				dataReturn = data;
				showResults(data, currentPage);

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

  		function showResults(results, page){
    			var html = "";
    			var utubeVideoUrl = "https://www.youtube.com/watch?v=";
    			var itemsPerPage = 5;
    			console.log(page);
	    		

	    		for(i=itemsPerPage*(page-1);i<(itemsPerPage*page);i++){
	    			if (i < (results.items.length)-1) {
	    				if (page > 1) {
	    					$("#forward").prop("disabled", false);
		    				$("#backward").prop("disabled", false);
			    			var titleTag = ('<div class="results"><a href="' + utubeVideoUrl + (results.items[i]).id.videoId + '" target="_blank"><p class="result-title">' + (results.items[i]).snippet.title + '</p><img class="result-image" src="' + (results.items[i]).snippet.thumbnails.default.url + '"></a></div>')	
			    			html += titleTag;	     
		    			}else{
		    				$("#forward").prop("disabled", false);
		    				$("#backward").prop("disabled", true);
		    				var titleTag = ('<div class="results"><a href="' + utubeVideoUrl + (results.items[i]).id.videoId + '" target="_blank"><p class="result-title">' + (results.items[i]).snippet.title + '</p><img class="result-image" src="' + (results.items[i]).snippet.thumbnails.default.url + '"></a></div>')	
			    			html += titleTag;	     
		    			}	    				
	    			}else{
	    				$("#forward").prop("disabled", true);
	    			}	    					
	    		}
    			$('#search-results').html(html);    			
  		}
	}
});
	
