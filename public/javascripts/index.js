//发布
$('.btn-publish').on('click', function(){
	console.log('555');
	var blogContent = $('.textarea-add').val();
	if(!blogContent){
		alert('内容不能为空')
	}
	$.ajax({
		type: "GET",
		data: blogContent,
		dataType: "json",
		success: function(data){

		}
	})
})