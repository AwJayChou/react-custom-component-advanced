import React, { Component } from 'react'
import { Tree } from 'antd';
const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                        isleaf: '1'
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                        isleaf: '1'
                    },
                    {
                        title: 'test',
                        key: '0-0-0-3',
                        children: [
                            {
                                title: 'leaf',
                                key: '0-0-3-1',
                                // disableCheckbox: true,
                                children: [
                                    {
                                        title: '0-0-4-1',
                                        key: '0-0-4-1',
                                        isleaf: '1'
                                    },
                                    {
                                        title: '0-0-4-2',
                                        key: '0-0-4-2',
                                        isleaf: '1'
                                    },
                                ]
                            },
                            {
                                title: 'leaf',
                                key: '0-0-3-2',
                                isleaf: '1'
                            },
                        ]
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    { title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0', isleaf:'1' },
                    {
                        title: 'leaf1',
                        key: '0-0-1-2',
                        isleaf: '1'
                    },
                    {
                        title: 'leaf1',
                        key: '0-0-1-3',
                        isleaf: '1'
                    },
                ],
            },
        ],
    },
];

const defaultCheck = ['0-0-1-3', '0-0-1-2', '0-0-3-1', '0-0-4-1', '0-0-4-2'];
export default class  extends Component {
    filterNull = (list) => list.filter(v => v !== null);
    // 只选中勾选的内容 重新遍历整颗树结构
    filterNode = (node) => {
        const get = (arr) => {
           return this.filterNull(arr.map(v => {
               if(v && v.isleaf && !defaultCheck.includes(v.key)) { return null}
                return {
                    ...v,
                    children: v.children && get(v.children)
                }
            }))
        }
       return  get(node)
    }
    filterSingleParent = (list) => {
        // 没有子节点则删除父节点
        const get = (list) => {
            return this.filterNull(list.map(v => {
                // 叶子节点直接返回
                if(v.isleaf) return v
                // 非叶子节点继续遍历
                if(Array.isArray(v.children) && v.children.length > 0) {
                    return {
                        ...v,
                        children: get(v.children)
                    }
                }
                return null;
            }))
        }
        return get(list);
    }
    render() {
        console.log(' node => ', treeData)
        console.log( ' filter data =>', this.filterNode(treeData))
        console.log( ' filter data =>',this.filterSingleParent(this.filterNode(treeData)))
        return (
            <div>
                <Tree
                    checkable
                    disabled
                    // expe
                    defaultExpandedKeys={defaultCheck}
                    // defaultSelectedKeys={[ '0-0-1']}
                    defaultCheckedKeys={defaultCheck}
                    // onSelect={onSelect}
                    // onCheck={onCheck}
                    treeData={this.filterSingleParent(this.filterNode(treeData))}
                    // treeData={treeData}
                />
            </div>
        )
    }
}
