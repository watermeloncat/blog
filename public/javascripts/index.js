//发布
$('.btn-publish').on('click', function(){
	var blogContent = $('.textarea-add').val();
	if(!blogContent){
		alert('内容不能为空');
		return;
	}
	var date = new Date(),
			yy = date.getFullYear(),
			MM = date.getMonth() + 1,
			dd = date.getDate();
	var postData = {
		'content': blogContent,
		'date': yy+'-'+MM+'-'+dd
	};
	$.ajax({
		url: '/',
		type: "post",
		data: postData,
		success: function(data){
			alert('发布成功!');
			location.href = '/';
		},
		error: function(data){
			alert('发布失败!');
			location.href = 'error';
		}
	})
})

//删除
$('.delete').on('click', function(){
	var deleteContent = $(this).attr('data-content');
	var postData = {
		'deleteContent': deleteContent
	};
	$.ajax({
		url: '/',
		type: 'post',
		data: postData,
		success: function(data){
			alert('删除成功！');
			location.href = '/';
		},
		error: function(data){
			alert('删除失败');
			location.href = 'error';
		}
	})
})

//更新
$('.update').on('click', function(){
	var updateContent = $(this).attr("data-content");
	location.href= '/update?updateBlog =' +updateContent
})




