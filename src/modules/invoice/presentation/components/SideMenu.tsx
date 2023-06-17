import { MenuProps, Tabs } from "antd";
import { useState } from "react";
import { Layouts } from "./elements/Layouts";
import { Components } from "./elements/Components";

const TAB_ITEMS = [
  {
    label: "Layouts",
    key: 'layout',
    children: <Layouts />
  },
  { 
    label: "Components", 
    key: 'component',
    children: <Components /> 
  }
];

export default function SideMenu({ headerSize }: { headerSize: number | string }) {
  const [current_menu, setMenu] = useState('layout');


  return (
    <div style={{ display: "flex", flexDirection: 'row', height: '100%' }}>
      <div style={{ display: "flex", flexDirection: 'column', width: '90px', justifyContent: 'start' }}>
        <div style={{ height: headerSize }}>  </div>
      </div>
      <div style={{ display: "flex", flexDirection: 'column', flex: 1, justifyContent: 'start' }}>
        <div style={{ height: headerSize, backgroundColor: 'white' }}>
          <span>Hello World</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "start", backgroundColor: "white", gap: 4, padding: "8px" }}>
          <Tabs
            defaultActiveKey="1"
            items={TAB_ITEMS}
          />
        </div>
      </div>
    </div>
  )
}