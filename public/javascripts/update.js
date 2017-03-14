var oldContent = decodeURI(window.location.search.substr(15));

$('.textarea-add').val(oldContent);

//更新
$('.btn-update').on('click', function(){
	var updateContent = $('.textarea-add').val();
	if(!updateContent){
		alert('内容不能为空!');
		return;
	}
	if(updateContent === oldContent) {
		alert('内容没有更新!');
		return;
	}
	var postData = {
		'oldContent': oldContent,
		'updateContent': updateContent
	}
	$.ajax({
		url: '/',
		type: "post",
		data: postData,
		success: function(data) {
			alert('更新成功');
			location.href= '/'
		},
		error: function(data) {
			alert('更新失败');
			location.href= 'error'
		}

	})
})