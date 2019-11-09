var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 1
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 2
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 3
    }
];

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        },
        strFilter: function (value) {
            if (!value) {
                return '0'
            }
            return "金額は" + value + "円です"
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
        }
    }
});

vm.$watch(function() {
    return this.items[0].quantity;
}, function (quantity) {
    console.log('!!' + quantity + '!!')
})


