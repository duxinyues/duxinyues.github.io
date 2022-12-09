一个优秀的产品，需要有一个良好的错误处理策略可以让用户知道到底发生什么。不至于让用户自己不知道发生了什么，然后再重试或者是不至于然用户感到特别厌烦，然后直接离开。

## try/catch语句
try/catch语句，在JavaScript中作为处理异常的一种方式，基本语句如下：

```javascript
try{
   // 可能出错的代码
} catch(error){
   // 出错的时候做什么
}
```
如果try块中有代码发生错误，就会立即退出执行，跳到catch块中，这时候catch模块接受到一个对象，该对象包含了发生错误的相关信息，比如：

```javascript
try{
	window.someNonexistenFunction();
} catch (error){
	console.log(error.message);
}
```

这个message属性是唯一一个在IE、Firefox、Safari、Chrome和Opera中都有的属性，尽管每个浏览器添加了其他属性。IE添加了description属性（其值始终等于message）和number属性（它包含内部错误号）。Firefox添加了fileName、lineNumber和stack（包含栈跟踪信息）属性。Safari添加了line（行号）、sourceId（内部错误号）和sourceURL属性。同样，为保证跨浏览器兼容，最好只依赖message属性。


####  finally子句
在try/catch语句中，可选的finally语句始终运行，意思就是try模块中代码执行结束后，就执行finally模块中的代码。如果出错并执行catch中的代码，finally模块中代码依旧在运行。try或者catch不能阻止finally块的执行，包括return。比如：

```javascript
function test(){
	try{
		return 2;
	}catch(err){
		return 1;
	}finally{
		return 0;
	}
}
```
