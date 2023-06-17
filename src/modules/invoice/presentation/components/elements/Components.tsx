import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { useComponentSearch } from "../../../states/sidebar.state";
import { ElementItem } from "./ElementItem";

const elements = [
    { icon: '', name: 'TEXT', type: 'COMPONENT', factory: null },
    { icon: '', name: 'LOGO', type: 'COMPONENT', factory: null },
    { icon: '', name: 'IMAGE', type: 'COMPONENT', factory: null },
    { icon: '', name: 'TABLE', type: 'COMPONENT', factory: null },
];

export const Components = () => {
    const {componentSearch, setComponentSearch} = useComponentSearch();

    return (
        <div style={{ flex: 1, flexDirection: 'column', justifyContent: "start", }}>
            <Input placeholder="Search" prefix={<SearchOutlined />} value={componentSearch} onChange={(e) => setComponentSearch(e.target.value)} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
                {elements.filter(e => e.name.toLocaleLowerCase().includes(componentSearch.toLocaleLowerCase())).map(e => (
                   <ElementItem key={e.name} element={e} />
                ))}
            </div>
        </div>
    )
}