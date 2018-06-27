const data = [
    {
        name: '首页',
        key:'',
        children:[],
        haschildren:false
    },
    {   
        name:'内容',
        key:'all',
        haschildren:true,
        children: [
            {
                name: '内容1',
                key:'1',
                haschildren:false,
                children: []
            },
            {
                name: '内容2',
                key:'2',
                haschildren:false,
                children: []
            },
            {
                name:'内容3',
                key:'3',
                haschildren:false,
                children:[]
            }
        ],
    },
]
export default data