import { SearchOutlined } from "@ant-design/icons"
import { Grid, Input } from "antd"
import React from "react"
import { ElementItem } from "./ElementItem"
import { useLayoutSearch } from "../../../states/sidebar.state";

const elements = [
    { icon: '', name: 'TEXT', type: 'LAYOUT' },
    { icon: '', name: 'LOGO', type: 'LAYOUT' },
    { icon: '', name: 'IMAGE', type: 'LAYOUT' },
    { icon: '', name: 'TABLE', type: 'LAYOUT' },
];


export const Layouts = () => {
    const {layoutSearch, setLayoutSearch} = useLayoutSearch();

    return (
        <div style={{ flex: 1, flexDirection: 'column', justifyContent: "start", }}>
            <Input placeholder="Search" prefix={<SearchOutlined />} value={layoutSearch} onChange={(e) => setLayoutSearch(e.target.value)} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
                {elements.filter(e => e.name.toLocaleLowerCase().includes(layoutSearch.toLocaleLowerCase())).map(e => (
                   <ElementItem key={e.name} element={e} />
                ))}
            </div>
        </div>
    )
}