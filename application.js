$(document).ready(function(){

instagram = {
	client_id: '418d62fb0bd744e2a34f03f2be90d45a',
	apiHost: 'https://api.instagram.com'
}

function instagramFeed(){
var instafeed = $.ajax({
		type: "GET",
		url: 'https://api.instagram.com/v1/users/1222661188/media/recent/?client_id=' + instagram.client_id,
		dataType: "jsonp",
		//cache: false,
		/*data: {
			format: 'jsonp',
			action: 'query',
		},*/
		success: function(data){
			console.log('request returned');
			console.log(data);	
			return data;			
		},
	})
};

instagramFeed();

console.log('working');

var sidebarBig = $("#aside-big");
var main = $("main");


$('#aside-top').on('click', function(){
	sidebarBig.hide("slide", {direction: "right"}, 250);
	main.css("right", "48px");
});

$('#aside-small').on('click', function(){
	sidebarBig.show("slide", {direction: "right"}, 250);
	main.css("right", "300px");
});



for(i=0; i<15; i++){
	var instagramTile = $('<div class="insta-post"><div class="insta-pic"><div class="insta-pic-overlay">QuizNotion</div></div><div class="insta-user-pic"><div class="insta-user-pic-overlay"></div></div><div class="insta-user-username"><h3>UserName</h3><h4>2 Hours Ago</h4></div><div class="insta-caption"><p>This is the caption for this instagram photo. It spans two lines of text.</p></div></div>');
	$(instagramTile).appendTo("#insta-tiles");
	console.log('wtf');
}


/*data:[{
	"attribution":null,
	"tags":[],
	"location":null,
	"comments":{
		"count":0,
		"data":[]},
	"filter":"X-Pro II",
	"created_time":"1396111593",
	"link":"http:\/\/instagram.com\/p\/mIjxznkpWg\/",
	"likes":{
		"count":1,
		"data":[{
			"username":"lagiato",
			"profile_picture":"http:\/\/images.ak.instagram.com\/profiles\/profile_190993763_75sq_1365866954.jpg",
			"id":"190993763",
			"full_name":"lagiato"}]},
	"images":{
		"low_resolution":{
			"url":"http:\/\/distilleryimage0.s3.amazonaws.com\/9ff6355eb76111e3aec5128fd569807c_6.jpg",
			"width":306,
			"height":306},
			"thumbnail":{
				"url":"http:\/\/distilleryimage0.s3.amazonaws.com\/9ff6355eb76111e3aec5128fd569807c_5.jpg",
				"width":150,
				"height":150},
		"standard_resolution":{
				"url":"http:\/\/distilleryimage0.s3.amazonaws.com\/9ff6355eb76111e3aec5128fd569807c_8.jpg",
				"width":640,
				"height":640}},
	"users_in_photo":[],
	"caption":{
		"created_time":"1396111594",
		"text":"in Moldova.",
		"from":{
			"username":"zaidesche",
			"profile_picture":"http:\/\/images.ak.instagram.com\/profiles\/profile_1222661188_75sq_1396106515.jpg",
			"id":"1222661188",
			"full_name":"z"},
			"id":"686956298848343889"},
	"type":"image",
	"id":"686956297481000352_1222661188",
	"user":{
		"username":"zaidesche",
		"website":"",
		"profile_picture":
		"http:\/\/images.ak.instagram.com\/profiles\/profile_1222661188_75sq_1396106515.jpg",
		"full_name":"z",
		"bio":"",
		"id":"1222661188"}}]


/*
function Questions(question, option1, option2) {
	this.question = question;
	this.option1 = option1;
	this.option2 = option2;
}

var quiz = new Array();
	quiz[0] = new Questions("question1", "question1, option1", "question1, option2");
	quiz[1] = new Questions("question2", "question2, option1", "question2, option2");
	quiz[2] = new Questions("question3", "question3, option1", "question3, option2");

for(i=0; i<3; i++){
	console.log(quiz[i]);
	console.log(quiz[i].option1);
}






/*var questions = [
	question1: [
		question: "This is question one.",
		option1: "Question one: Option one.",
		option2: "Question two: Option two."
	],
	question2: [
		question: "This is question two.",
		option1: "Question two: Option one.",
		option2: "QUestion two: Option one."
	],
	question3: [
		question: "This is question three.",
		option1: "Question three: Option one.",
		option2: "QUestion three: Option two."
	]
];

console.log(questions[key].question);*/







});