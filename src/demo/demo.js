var onClick = (event)=>{
    alert(
        ' clicked\n' +
        'Alt: ' + event.altKey + '\n' +
        'Control: ' + event.ctrlKey + '\n' +
        'Meta: ' + event.metaKey + '\n' +
        'Shift: ' + event.shiftKey
    );
}
var DataTwo = [
    {
        id:'0.0',
        name:'BOSS',
        description:'老大'
    },
    {
        id:'1.0',
        name:'人力资源',
        description:'人力资源-老大'
    },
    {
        id:'1.1',
        name:'游戏事业部',
        description:'游戏事业部-老大'
    }
]
var optionsTwo = {
    chart: {
        height: '100%',   
        inverted: true, 
    },
    title: {
        useHTML:true,
        text: "World population 2017 | <a href='https://www.highcharts.com.cn' target='_blank'>go to highcharts</a>" 
    },
    series:[
        {
            type: 'organization',
            
            allowPointSelect:true,
            events:{
                click:onClick
            },
            keys: ['from', 'to'],
            data: [
                ['股东', '董事会'],
                ['董事会', 'CEO'],
                ['CEO', 'CTO'],
                ['CEO', 'CPO'],
                ['CEO', 'CSO'],
                ['CEO', 'CMO'],
                ['CEO', 'HR'],
                ['CTO', 'Product'],
                ['CTO', 'Web'],
                ['CSO', 'Sales'],
                ['HR', 'Market'],
                ['CMO', 'CMO-hr']
            ],
            levels:[
                {
                    level: 2,
                    color: '#980104'
                }
            ],
            nodes:[
                {
                    id: 'CMO',
                    title: 'CMO',
                    name: 'Vidar Brekke',
                    // column: 4,
                    image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                    layout: 'hanging',
                    color: '#980104'
                }
            ],
            colorByPoint: false,
            color: '#007ad0',
            dataLabels: {
                color: 'white'
            },
            borderColor: 'white',
        }
    ]
}