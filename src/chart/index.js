// import OrgChart from './orgchart';

var webcallMeIcon = '<svg width="24" height="24" viewBox="0 0 300 400"><g transform="matrix(1,0,0,1,40,40)"><path fill="#5DB1FF" d="M260.423,0H77.431c-5.522,0-10,4.477-10,10v317.854c0,5.522,4.478,10,10,10h182.992c5.522,0,10-4.478,10-10V10 C270.423,4.477,265.945,0,260.423,0z M178.927,302.594c0,5.522-4.478,10-10,10c-5.523,0-10-4.478-10-10v-3.364h20V302.594z M250.423,279.229H87.431V58.624h162.992V279.229z" /><path fill="#5DB1FF" d="M118.5,229.156c4.042,4.044,9.415,6.271,15.132,6.271c5.715,0,11.089-2.227,15.133-6.269l29.664-29.662 c4.09-4.093,6.162-9.442,6.24-14.816c5.601-0.078,10.857-2.283,14.829-6.253l29.66-29.662c4.042-4.043,6.269-9.417,6.269-15.133 c0-5.716-2.227-11.09-6.269-15.13l-9.806-9.806c-4.041-4.043-9.415-6.27-15.132-6.27c-5.716,0-11.09,2.227-15.132,6.269 l-29.663,29.662c-4.092,4.092-6.164,9.443-6.242,14.817c-5.601,0.078-10.857,2.283-14.828,6.252l-29.661,29.662 c-4.042,4.043-6.269,9.418-6.268,15.136c0,5.716,2.227,11.089,6.269,15.129L118.5,229.156z M168.618,147.548l29.662-29.661 c1.587-1.587,3.696-2.461,5.94-2.461c2.243,0,4.353,0.874,5.938,2.461l9.808,9.808c1.586,1.586,2.46,3.694,2.46,5.937 c0,2.244-0.874,4.354-2.462,5.941l-29.658,29.661c-1.588,1.587-3.697,2.46-5.941,2.46c-2.243,0-4.353-0.874-5.938-2.46 l-0.309-0.309l19.598-19.598c2.539-2.539,2.539-6.654,0-9.192c-2.537-2.538-6.654-2.538-9.191,0l-19.599,19.598l-0.308-0.308 C165.344,156.152,165.345,150.823,168.618,147.548z M117.888,198.28l29.66-29.661c1.587-1.586,3.695-2.46,5.939-2.46 c2.242,0,4.349,0.872,5.934,2.455c0.002,0.001,0.004,0.003,0.005,0.005l0.309,0.309l-19.598,19.598 c-2.539,2.538-2.539,6.653,0,9.191c1.269,1.27,2.933,1.904,4.596,1.904s3.327-0.635,4.596-1.904l19.599-19.598l0.309,0.309 c3.273,3.273,3.273,8.603,0,11.877l-29.662,29.66c-1.588,1.588-3.698,2.462-5.941,2.462c-2.243,0-4.352-0.874-5.938-2.462 l-9.807-9.806c-1.586-1.586-2.46-3.694-2.46-5.938C115.426,201.978,116.3,199.868,117.888,198.28z" /></g></svg>';

var OptionsOne = {
    template: "derek",
    enableDragDrop: true,
    toolbar: true,
    menu: {
        pdf: { text: "Export PDF" },
        png: { text: "Export PNG" },
        svg: { text: "Export SVG" },
        csv: { text: "Export CSV" }
    },
    nodeMenu: {
        details: { text: "Details" },
        add: { text: "Add New" },
        edit: { text: "Edit" },
        remove: { text: "Remove" },
    },
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
        field_number_children: "field_number_children"
    },
    nodes: [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://balkangraph.com/js/img/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://balkangraph.com/js/img/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://balkangraph.com/js/img/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://balkangraph.com/js/img/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://balkangraph.com/js/img/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://balkangraph.com/js/img/8.jpg" }
    ]
}

var OptionsTwo = {
    // template: "luba", // 模板
    // template: "base",
    // template: "rony",
    layout: BALKANGraph.mixed,
    enableSearch: false,   // 隐藏搜索
    enableDragDrop: true,  // 节点可拖拽
    // lazyLoading: false, // 只在需要的时候加载
    exportUrl: "https://balkangraph.com/export",
    collapse: {
        level: 1, // 折叠1级菜单的所有子菜单
        allChildren: true
    },
    // tags: {
    //     "Management": {
    //         template: "rony"
    //     },
    //     "Marketing Manager": {
    //         template: "polina"
    //     },
    //     "IT Manager": {
    //         template: "ana"
    //     }
    // }, 

    linkBinding: {
        link_field_0: "link"
    },
    nodes: [
        { id: 1, children_num: 2, tags: ["QA"], name: "Amber McKenzie", title: "CEO", img: "http://balkangraph.com/js/img/1.jpg" },
        { id: 2, pid: 1, children_num: 2, name: "Ava Field", title: "IT Manager", img: "http://balkangraph.com/js/img/2.jpg" },
        { id: 3, pid: 1, children_num: 2, name: "Rhys Harper", title: "Marketing Team Lead", img: "http://balkangraph.com/js/img/3.jpg" },
        { id: 4, pid: 2, children_num: 0, name: "Carol Foster", title: "Junior Developer", img: "http://balkangraph.com/js/img/4.jpg" },
        { id: 5, pid: 2, children_num: 0, name: "Blake Morris", title: "Senior Developer", img: "http://balkangraph.com/js/img/5.jpg" },
        { id: 6, pid: 3, children_num: 0, name: "Erin Grant", title: "Junior Marketing", img: "http://balkangraph.com/js/img/6.jpg" },
        { id: 7, pid: 3, spids: 6, children_num: 0, name: "Avery Hughes", title: "Senior MArketing", img: "http://balkangraph.com/js/img/7.jpg", link: "www.baidu.com" }
    ]
}

var OptionsThree = {
    template: "luba",
    nodeMouseClick: OrgChart.action.none,
    nodeMenu: {
        add: { text: "添加子节点" },
        remove: { text: "移除节点" },
        edit: { text: "编辑" },
        details: { text: "详情" },
        // call: { // 自定义菜单选项
        //     icon: webcallMeIcon,
        //     text: "Call now",
        //     // onClick: callHandler
        // },
    },
    menu: {
        pdf: { text: "导出 PDF" },
        png: { text: "导出 PNG" },

    },
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
        // children_num: "children_num",
        html: getHtml
    },
    nodes: [
        { id: 1, children_num: 2, tags: ["QA"], name: "Amber McKenzie", title: "CEO", img: "http://balkangraph.com/js/img/1.jpg" },
        { id: 2, pid: 1, children_num: 2, name: "Ava Field", title: "IT Manager", img: "http://balkangraph.com/js/img/2.jpg" },
        { id: 3, pid: 1, children_num: 2, name: "Rhys Harper", title: "Marketing Team Lead", img: "http://balkangraph.com/js/img/3.jpg" },
        { id: 4, pid: 2, children_num: 0, name: "Carol Foster", title: "Junior Developer", img: "http://balkangraph.com/js/img/4.jpg" },
        { id: 5, pid: 2, children_num: 0, name: "Blake Morris", title: "Senior Developer", img: "http://balkangraph.com/js/img/5.jpg" },
        { id: 6, pid: 3, children_num: 0, name: "Erin Grant", title: "Junior Marketing", img: "http://balkangraph.com/js/img/6.jpg" },
        { id: 7, pid: 3, children_num: 0, name: "Avery Hughes", title: "Senior MArketing", img: "http://balkangraph.com/js/img/7.jpg"}
    ]
}

function getHtml(sender, node) {
    var data = sender.get(node.id);
    var name = data["name"];
    var link = data["link"];

    return '<p class="field_html"  style="font-size: 20px;color:#FFCA28" x="125" y="30" text-anchor="middle">' +
        name + '</p>'
}
function alertFun() {
    alert('111')
}
function callHandler(nodeId) {
    var nodeData = chart.get(nodeId);
    console.log(nodeData)
}

window.onload = function () {
    OrgChart.templates.luba.html =
        '<foreignobject class="node" x="20" y="10" width="200" height="100">{val}</foreignobject>';
    // OrgChart.templates.rony.children_num = '<circle cx="60" cy="110" r="15" fill="#F57C00"></circle><text fill="#ffffff" x="60" y="115" text-anchor="middle">{val}</text>';
    var chart = new OrgChart(document.getElementById("tree"), OptionsThree);
    // chart.addClink(5, 1, 'lorem ipsum', 'blue'); // 添加特殊节点连接线
    console.log($('.field_html'))
    $('.field_html').click(function(){
        alert('111')
    })



};