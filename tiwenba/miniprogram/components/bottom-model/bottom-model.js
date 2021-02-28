// components/bottom-model/bottom-model.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        modelShow: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    options: {
        multipleSlots: true
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onClose() {
            this.setData({
                modelShow: false
            })
        }
    }
})