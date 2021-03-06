// components/blog-card/blog-card.js
import formatTime from '../../utils/formatTime.js'
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        blog: Object
    },
    observers: {
        ['blog.createTime'](val) {
            if (val) {
                this.setData({
                    _createTime: formatTime(new Date(val))
                })

            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        _createTime: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPreviewImage(e) {
            console.log(e);
            wx.previewImage({
                current: e.target.dataset.imgsrc, // 当前显示图片的http链接
                urls: e.target.dataset.imgs // 需要预览的图片http链接列表
            })
        }
    }
})