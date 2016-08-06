# 学习nodeg过程中的练习


* ##day01(process 对象)

    1. slice截取数组中的元素
  
    2. process对象

        *  process.argv

            1. 第一个参数是node.exe

            2. 第二参数是执行文件

            3. 传入的参数(可以从控制台写入参数，例如开发命令行程序时)

            4. API
                * readFile

                * writeFile

        * process.execArgv

            1. 保存node特殊(node-specific) 的命令行选项（参数）--harmony

        * process.env
            1. 用户环境   process.env.NODE_ENV=="development"

* ##day02 (buffer对象)   类比数组对象

    1. buffer.write()  API,将字符串写入缓冲区；

    2. buffer.toString() 缓冲区读取数据，有二进制转换为对应编码的字符串

    3. buffer.concat()  合并缓冲区

    4. Mac和windows\linux电脑上，对字节顺序的理解是不一致的。这时同一字节流可能会被解释为不同内容，如某字符为十六进制编码4E59，按两个字节拆分为4E和59，在Mac上读取时是从低字节开始，那么在Mac OS会认为此4E59编码为594E，找到的字符为“奎”，而在Windows上从高字节开始读取，则编码为U+4E59的字符为“乙”。

* ##day03  events模块，获取EventEmitter对象，大多数模块如http、stream模块会继承envents模块

  1. eventmitter实例  on('事件名字') 方法注册事件

  2. emit('事件名字') 触发事件

  3. error事件

* ##day04   stream文件模块

     1. creatReadStream()

     2. creatWriteStream()

     3. pip() 管道流

     5. 与路由有关的   url  和queryString模块

     6. 全局对象__dirnane,__filename,__setTimeout,__setTimeInterval,process,

     7. process 提供了与系统相关的api

     8. 工具模块  util

* ##day05  child_process

    1. 线程是程序执行的最小单元，进程是任务调度的最小单元

    2. 一个进程由一个或多个线程组成（至少一个），线程间可以共享进程的内存空间，进程间互相独立（有各自的内存空间）

    3. 操作系统使用 CPU 时间分片来调度进程、线程的执行，从而实现多任务

    4. 线程间的切换比进程间切换开销小

    ###child_process  keys:

    1. spawn()  是主方法，  exec(),    execFile(),   fork()都是他的包装;

    2. child_process.exec() 和 child_process.execFile() 方法还允许传递一个可选的回调函数，该回调函数会在子进程结束时被调用


* ##child_process  子进程与父进程之间通讯

* ##cluster    集群

   1. 判断主 、子进程  isMaster   isWorker

   2. fork()方法创建worker进程







