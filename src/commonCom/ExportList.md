## 导出 ExportList

```js
    <ExportList params={obj} url="/api/ats/" title="xx数据导出" />
```
::: tip 
注意：必须引入 exportAjax 方法
:::

| 参数名    | 说明                  | 必需   | 类型     | 备注             |
|--------|---------------------|------|--------|----------------|
| url    | 请求地址                | 是    | ‘’     |                |
| params | 请求参数                |      | \{\}   |                |
| method | 请求方式,可选'GET','POST' |      | 'GET'  |                |
| label  | 按钮文字                |      | "导出"   |                |
| title  | 导出文件名               |      | "导出数据" | 默认后缀名：'\.xlsx' |
