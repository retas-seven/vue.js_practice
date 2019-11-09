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
    }
];

var vm = new Vue({
    el: '#app',
    data: {
        items: itemList
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        totalPrice: function() {
            return this.items.reduce(function(sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function() {
            return 1000 <= this.totalPrice 
        },
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


