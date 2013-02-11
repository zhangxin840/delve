function getContent() {
	$.ajax({
		url : 'http://www.baidu.com',
		type : 'GET',
		success : function(res) {
			
			var headline = $(res.responseText).find('#lk').text();
			
			alert(headline);
		}
	});
}