import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { useComponentSearch } from "../../../states/sidebar.state";
import { ElementItem } from "./ElementItem";

const elements = [
    { icon: '', name: 'Border Bloc', type: 'COMPONENT' },
    { icon: '', name: 'Vertical Bloc', type: 'COMPONENT' },
    { icon: '', name: 'Horizontal Bloc', type: 'COMPONENT' },
    { icon: '', name: 'Absolute Bloc', type: 'COMPONENT' },
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