function alertFun (){
    alert('111')
}
OrgChart.templates.luba.html = 
'<foreignobject class="node" x="20" y="10" width="200" height="100">{val}</foreignobject>';
var chart = new OrgChart(document.getElementById("tree"), {
               mouseScrool: OrgChart.action.none,
template: "luba",
nodeMouseClickBehaviour: BALKANGraph.action.none,
nodeMouseClick:OrgChart.action.none,
nodeBinding: {

html:'html'
},
nodes: [
{ id: 1, name: "BALKANGraph123", link: "https://balkangraph.com",html:'<p class="field_0" onclick=alertFun  style="font-size: 20px;color:#FFCA28" x="125" y="30" text-anchor="middle">水电费水电费水电费</p>' },
{ id: 2, pid: 1, name: "webcall.me", link: "https://webcall.me"  },
{ id: 3, pid: 1, name: "GetOrgChart", link: "http://getorgchart.com" }
]
});