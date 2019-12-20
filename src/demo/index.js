var DataOne=[
    {
        id: '0.0',
        parent: '',
        name:'The World'
    },
    {
        id:'1',
        value:1,
        parent:'0.0',
        name:'亚洲',
    },
    {
        id:'2',
        name:'欧洲',
        value:2,
        parent:'0.0'
    },
    {
        id:'3',
        name:'大洋洲',
        value:3,
        parent:'0.0'
    },
    {
        id:'31',
        name:'澳大利亚',
        value:31,
        parent:'3'
    },
    {
        id:'11',
        name:'中国',
        value:11,
        parent:'1'
    },
    {
        id:'12',
        name:'韩国',
        value:12,
        parent:'1'
    },
    {
        id:'13',
        name:'日本',
        value:13,
        parent:'1'
    },
    {
        id:'21',
        name:'英国',
        value:21,
        parent:'2'
    },
    {
        id:'22',
        name:'法国',
        value:22,
        parent:'2'
    }

]
var optionsOne = {
    chart: {
        height: '100%',    
    },
    title: {
        useHTML:true,
        text: "World population 2017 | <a href='https://www.highcharts.com.cn' target='_blank'>go to highcharts</a>" 
    },
    series:[{
        type: 'sunburst',
        data: DataOne,
        cursor: 'pointer',
        allowDrillToNode:true,
        levels:[
            {
                level: 2,
                colorByPoint: true
            },
            {
                level: 3,
                
                colorVariation:{
                    key:'brightness',
                    to:0.6
                }
            }
        ]

    }]
};