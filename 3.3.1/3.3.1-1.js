Vue.component('item-desc', {
    props: {
        itemName: {
            type: String
        }
    },
    template: '<p>{{ itemName }}は便利です。</p>'
})

new Vue({
    el: '#app',
    data: {
        myItem: 'pen'
    }
})