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

export var OptionsTwo = {
    title:'你好',
    // template: "luba", // 模板
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
    tags: {
        "Management": {
            template: "rony"
        },
        "Marketing Manager": {
            template: "polina"
        },
        "IT Manager": {
            template: "ana"
        },
        "IT": {
            template: "ula"
        },
        "Marketing": {
            template: "belinda"
        }
    }, 
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    nodes: [
        { id: 1, tags: ["Management"], name: "Amber McKenzie", title: "CEO", img: "http://balkangraph.com/js/img/1.jpg" },
        { id: 2, pid: 1, tags: ["IT Manager"], name: "Ava Field", title: "IT Manager", img: "http://balkangraph.com/js/img/2.jpg" },
        { id: 3, pid: 1, tags: ["Marketing Manager"], name: "Rhys Harper", title: "Marketing Team Lead", img: "http://balkangraph.com/js/img/3.jpg" },
        { id: 4, pid: 2, tags: ["IT"], name: "Carol Foster", title: "Junior Developer", img: "http://balkangraph.com/js/img/4.jpg" },
        { id: 5, pid: 2, tags: ["IT"], name: "Blake Morris", title: "Senior Developer", img: "http://balkangraph.com/js/img/5.jpg" },
        { id: 6, pid: 3, tags: ["Marketing"], name: "Erin Grant", title: "Junior Marketing", img: "http://balkangraph.com/js/img/6.jpg" },
        { id: 7, pid: 3, tags: ["Marketing"], name: "Avery Hughes", title: "Senior MArketing", img: "http://balkangraph.com/js/img/7.jpg" }
    ]
}