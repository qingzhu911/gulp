const gulp = require("gulp");
const gulpCopy = require("gulp-copy");
const miniImage = require("gulp-imagemin");
const miniJS = require("gulp-uglify");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");
/*
	常用方法:
	gulp.task   定义任务
	gulp.src    输入文件路径
	gulp.dest   输出文件路径
	gulp.watch   监听文件变化



	node方法:
	pipe   管道
*/

// 定义默认任务
// gulp.task("default",() => {
// 	console.log("default必须这么写,才是默认任务");
// });


// 定义具体任务
gulp.task("message",() => {
	console.log("执行具体任务,需要在终端运行 gulp message(任务名)")
});



//定义拷贝任务第一个参数任务名,第二参数回调函数
gulp.task("copyHtml",() => {
	// 找到需要拷贝的文件路径
	//1.拷贝所有html文件
	gulp.src("src/*.html").pipe(gulp.dest("dist"));
});



//定义压缩图片任务
gulp.task("imageMin", () => {
	gulp.src("images/*").pipe(miniImage()).pipe(gulp.dest("dist/images"));
});


// 定义压缩js代码:
	// 下载模块 gulp-uglify
	// 引入模块 require()
	// 定义任务  task
 //    创建一个js文件夹,并且创建一个js文件,随便写一个函数
	gulp.task("jsMin",() => {
		gulp.src("js/*").pipe(miniJS()).pipe(gulp.dest("dist/jsForder"));
	});


//定义sass文件转css文件
gulp.task("sass",() => {
	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
});


//定义默认任务
gulp.task("default",["message","copyHtml","imageMin","jsMin","sass"]);




//监听任务
gulp.task("watch",() => {
	gulp.watch("js/*.js",["message"]);
	gulp.watch("images/*",["imageMin"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("src/*.html",["copyHtml"]);
});



// webserver
gulp.task("webserver",() => {
	return gulp.src("app").pipe(webserver({
		//名字固定
		port:4000,	//端口号
		livereload:true,  //热更新 
		open:true  //重新开个页面
	}))
});




















