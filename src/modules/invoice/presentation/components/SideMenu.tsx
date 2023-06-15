import { Menu, MenuProps } from "antd";
import { useState } from "react";

export default function SideMenu() {
  const [current_menu, setMenu] = useState('layout');

  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const TAB_ITEMS: MenuProps['items'] = [
    { label: "Layouts", key: 'layout' },
    { label: "Components", key: 'component' }
  ];
  const onClickMenu: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setMenu(e.key);
  };

  const LAYOUT_ITEMS = [
    {
      label: 'Navigation One',
      key: 'mail',
    },
    {
      label: 'Navigation Two',
      key: 'app',
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: 'column' }}>
      <div style={{}}>
        <Menu mode='horizontal' items={TAB_ITEMS} selectedKeys={[current_menu]} onClick={onClickMenu} />
      </div>
      <div style={{ flex: 1 } && current_menu == 'layout' ? {display: 'flex', flexDirection: 'column'} :{display: 'none'}}>
        {LAYOUT_ITEMS.map(layout => (
          <div key={layout.key} style={{height: 40}}>
            {layout.label}
          </div>
        ))}
      </div>
      <div style={{flex: 1} && current_menu == 'component' ? {display: 'block'} :{display: 'none'}}>
        <p>
          Components 
        </p>
      </div>
    </div>
  )
}