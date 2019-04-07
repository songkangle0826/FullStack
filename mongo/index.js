// 数据库和文件的主要区别
// 1.数据可有数据表,行,列的概念,让我们存储起来更方便
// 2.数据可提供了非常方便的接口,可以让node.js,php,java,.net很方便的实现这个价修改删除的功能

// NoSql(not Only Sql)的介绍
	// 非关系型数据库

	什么时候使用NoSql?
		1.对数据库高并发读写需求
		2.对海量数据的高效率存储和访问的需求
		3.对数据库的高可扩展性和高可用性的需求
	NoSql和传统数据库简单对比
		非关系型数据库.没有行,列的概念.用JSON来存储数据

// mongodb
	mongod --dbpath=/Users/Lee/Documents/data/db  启动命令

0.查看所有的数据库
	show dbs
1.使用数据库,创建数据库
	use 数据库名
2.不需要创建表 - 直接给表中插入数据就好了
3.查看一个数据库有多少集合
	show collections
4.插入一条数据
	db.user.insert({"name":"zhangsan",age:30})  插入数据的同时,表名也自动创建
5.查找
	db.user.find({"age":{$gt:20}})  //大于20
	db.user.find({"age":{$gte:20}})  //大于等于20
	db.user.find({"age":{$lt:20}})   //小于20
	db.user.find({"age":{$lte:20}})  //小于2等于0

	db.user.find({"name":"zhangsan","age":20})  //查找name为zhangsan并且age等于20的

	db.user.find({"age":{$gt:20,$lte:30}})  //查找大于age大于20小于等于30的

	模糊查询 //
		db.article.find({"title":/团队/})   //模糊查询
		db.article.find({"title":/^这/})   //以这开头的


	db.user.find({},{"name":1})					//指定列查询
	db.user.find({"age":{$gt: 20}},{"name":1})

	排序
		db.user.find().sort({"age":1})    //1表示升序
		db.user.find().sort({"age":-1})    //1表示升序

	分页
		limit 查询几条
		skip 跳过几条
		db.user.find().limit(5)
		db.user.find().skip(2).limit(2)

		db.user.find().skip(0).limit(2)
		db.user.find().skip(2).limit(2)
		db.user.find().skip(4).limit(2)
		db.user.find().skip(6).limit(2)
		n代表页数,m代表条数
		db.user.find().skip((n-1)*m).limit(m)
	or 或者
		db.user.find({$or:[{"age":22},{"age":30}]})  //查询age等于22或者30的

	查看第一条数据
		db.user.findOne()

	查看总数
		db.user.find().count()

删除表
	db.[表名].drop()
删除数据库
	db.dropDatabase();
修改数据
	db.user.update({"name":"zhangsna"},{$set:{"name":"zhangsan666"}}) //第一个参数条件  第二个数据是修改成什么

删除数据
	db.user.remove({"name":"wangmazi"})
	仅仅删除一条数据
	db.user.remove({"name":"zhaosi"},{justOne:true})

mongodb索引和explain的使用
	索引是对数据库表中一列或多列的值进行排序的一种结构，可以让我们查询数据库变得更快，MongoDB的索引机会与传统关系型数据库一模一样，这其中也包括一些基本的查询优化技巧

	// 设置索引
		db.user.ensureIndex({"name":1})
	// 获取当前集合的索引
		db.user.getIndexes();
	// 删除索引的命令
		db.user.dropIndex({"username":1})


// explain exexutionStats 查询具体的执行时间
	db.tablename.find().explain('executionStats');


// 唯一索引(设置唯一索引)
	db.user.ensureIndex({"username":1},{"unique":true});





