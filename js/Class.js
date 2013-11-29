/**
 * 继承
 * Created by 黄世凡 on 13-11-29.
 * Email: here.wait.go@gmail.com
 */

this.Class = function()
{
};


Class.initialzing = false;
//判断方法是否有继承父类的方法
var fntest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

/**
 * 继承
 * @param prop 子类
 */
Class.extend = function(prop)
{
    //父类
    var _super = this.prototype;
    //子类
    var prototype = new this();

    for(var name in prop)
    {
        prototype[name] = typeof prop[name]=="function"
                        && typeof _super[name]=="function"
                        && fntest.test(prop[name])
            ?
            (function(name, fn)
            {
                return function()
                {
                    //暂存调用父类方法
                    var temp = this._super;

                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);

                    //还原调用父类方法
                    this._super = temp;

                    return ret;
                }
            })(name, prop[name])
            :
            prop[name];
    }

    function Class()
    {
        if (this.init)
            this.init.apply(this, arguments);
    }

    //设置原形为子类的
    Class.prototype = prototype;
    //设置构造函数
    Class.prototype.constructor = Class;
    //设置当前运行的函数给变量(extend不是已经定义了吗?因为上面设置过prototype覆盖了方法)
    Class.extend = arguments.callee;

    return Class;
}


