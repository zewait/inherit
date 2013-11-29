prototype->原形,类有prototype属性,对象没prototype属性(可以这么记new Object()的时候是把prototype赋给了变量,但不是这样)
construct->构造函数类.construct输出构造函数定义的内容(字符串,代码区用[native code]代码真实代码,类.prototype.construct代码区为真实代码(前提不是系统定义的))
根据上面:对象.construct==类.prototype.construct成立


按照《悟透javascript》书中说的，new形式创建对象的过程实际上可以分为三步：

第一步是建立一个新对象（叫A吧）；

第二步将该对象（A）内置的原型对象设置为构造函数(就是Person)prototype 属性引用的那个原型对象；

第三步就是将该对象（A）作为this 参数调用构造函数(就是Person)，完成成员设置等初始化工作。