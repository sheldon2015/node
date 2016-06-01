#学习nodeg过程中的练习
* ##day01(process 对象)
    1. slice截取数组中的元素
    2. process对象
        * process.argv
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
    4. 麦金塔电脑（Mac）机和个人电脑上，对字节顺序的理解是不一致的。这时同一字节流可能会被解释为不同内容，如某字符为十六进制编码4E59，按两个字节拆分为4E和59，在Mac上读取时是从低字节开始，那么在Mac OS会认为此4E59编码为594E，找到的字符为“奎”，而在Windows上从高字节开始读取，则编码为U+4E59的字符为“乙”。


