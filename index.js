import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Switch, Space } from 'antd';

const columns = [
  {
    title: '文章标题',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '相似度',
    dataIndex: 'sim',
    key: 'sim',
    width: '15%'
  }
];

const data = [
  {
    key: 1,
    title: '文章标题1',
    sim: 80,
    children: [
      {
        key: 11,
        title: '文章标题1-折叠1',
        sim: 99
      },
      {
        key: 12,
        title: '文章标题1-折叠2',
        sim: 98
      }
    ]
  },
  {
    key: 2,
    title: '文章标题2',
    sim: 80
  }
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};

function TreeData() {
  const [checkStrictly, setCheckStrictly] = React.useState(false);
  return (
    <>
      <Space align="center" style={{ marginBottom: 16 }}>
        CheckStrictly:{' '}
        <Switch checked={checkStrictly} onChange={setCheckStrictly} />
      </Space>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
      />
    </>
  );
}

ReactDOM.render(<TreeData />, document.getElementById('container'));
