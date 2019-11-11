var itemList = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 1
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 1
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    },
    {
        name: 'ボールペン',
        price: 350,
        quantity: 0
    }
];

var vm = new Vue({
    el: '#app',
    data: {
        items: itemList
    },
    filters: {
        /** カンマ編集 */
        numberWithDelimiter: function (value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    methods: {
        /** 購入処理 */
        doBuy: function () {
            alert(this.totalPriceWithTax + '円のお買い上げ！')
            this.items.forEach(function (item) {
                item.quantity = 0
            })
        }
    },
    computed: {
        /** 合計金額計算 */
        totalPrice: function() {
            return this.items.reduce(function(sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        /** 税込合計金額計算 */
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        /** 購入可／不可判別 */
        canBuy: function() {
            return 1000 <= this.totalPrice 
        },
        /** 購入不可時のスタイル */
        errorMessageStyle: function() {
            return {
                border: this.canBuy ? '' : '1px solid rgb(150, 0, 0)',
                color: this.canBuy ? '' : 'rgb(150, 0, 0)'
            }
        }
    }
});

vm.$watch(function() {
    return this.items[0].quantity;
}, function (quantity) {
    console.log('!!' + quantity + '!!')
})


