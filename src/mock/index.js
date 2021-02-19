// import mock from 'mockjs'
// mock.mock(/getbooks/,{
// 	"books|10":[
// 		{
// 			"title": "@CTITLE",
// 			"mainimg": "@DATAIMAGE(240x320,@COLOR)",
// 			"outline": "@CSENTENCE(50,100)",
// 			"id|+1": 101
// 		}
// 	]
// })

// mock.mock(/getbook\/\d+/,function(option){
// 	let datas = option.url.split("/");
// 	let pk = datas[datas.length-2];
// 	console.log(pk);
// 	return mock.mock({
// 		"title": "@CTITLE",
// 		"mainimg": "@DATAIMAGE(240x320,@COLOR)",
// 		"outline": "@CSENTENCE(50,100)",
// 		"id|+1": pk,
// 		"articles|100":[
// 			{
// 				"id|+1": 100001,
// 				"title": "@CTITLE(5,10)",
// 				"bookid": pk,
// 				"content": "@CSENTENCE(150,300)"
// 			}
// 		]
// 	})
// })

// mock.mock(/article\/\d+/,function(option){
// 	let datas = option.url.split("/");
// 	let pk = datas[datas.lenth-2];
// 	console.log();
// 	return mock.mock({
// 		"id": pk,
// 		"title": "@CTITLE(5,10)",
// 		"bookid": "@NATURAL(101,110)",
// 		"content": "@CSENTENCE(150,300)"
// 	})
// })

// mock.mock(/collects/,/get/, function(){
// 	return mock.mock({
// 						"books|3": [{
// 							"id|+1":101,
// 							"title":"@CTITLE"
// 						}],
// 					})
// })

// mock.mock(/collects/,/post/,function(){
// 	return {
// 		success:`添加成功`
// 	}
// })
// mock.mock(/collects\/\d+/,/delete/,function(){
// 	return{
// 		success:`删除成功`
// 	}
// })