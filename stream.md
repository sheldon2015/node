# stream

Stream是一个抽像的接口，一般不会直接使用，需要实现内部的某些抽象方法(例如_read、_write、_transform)

1. readable流

    - 事件      end data readable close error
    - 重要方法   pause()  resume()   read()

2. writeable流

    - 事件  drain  end 事件

3. readable流的流动模式和暂停模式

## stream 的理解

1. 将数据推进一个readable流中时，一直要到另一个东西来消耗数据之前，数据都会存在一个缓存中;

2.  ObjectMode   heighwatermark是什么意思

3. Readable stream 并不主动开始发送数据，直到显式表明可以接收数据时才会发送数据（类似于惰性加载）。

4. 内部缓存  





