import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { ElementItem } from "./ElementItem"
import { useLayoutSearch } from "../../../states/sidebar.state";
import { BlocType } from "../../../../core/domain/entities/ibloc";
import { BlocVerticalFactory } from "../../../../core/domain/factories/BlocVerticalFactory";
import { BlocHorizontalFactory } from "../../../../core/domain/factories/BlocHorizontalFactory";
import { BlocBorderFactory } from "../../../../core/domain/factories/BlocBorderFactory";
import { BlocAbsoluteFactory } from "../../../../core/domain/factories/BlocAbsoluteFactory";

const elements = [
    { icon: '', name: 'Border Bloc', type: 'LAYOUT', layout_type: BlocType.BORDER_LAYOUT , factory: (new BlocBorderFactory)},
    { icon: '', name: 'Vertical Bloc', type: 'LAYOUT', layout_type: BlocType.VERTICAL_LAYOUT, factory: (new BlocVerticalFactory)  },
    { icon: '', name: 'Horizontal Bloc', type: 'LAYOUT', layout_type: BlocType.HORIZONTAL_LAYOUT, factory: (new BlocHorizontalFactory)  },
    { icon: '', name: 'Absolute Bloc', type: 'LAYOUT', layout_type: BlocType.ABSOLUTE_LAYOUT, factory: (new BlocAbsoluteFactory)  },
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