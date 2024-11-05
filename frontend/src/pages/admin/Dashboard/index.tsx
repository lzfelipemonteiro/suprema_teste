import React from 'react';
import { MenuItems } from '../../../components/layout/AdminLayout/Menu';
import { EditPage } from '../../../components/layout/AdminLayout/EditPage';

export const Dashboard = () => {
  return (
    <section className={`
      w-screen h-screen flex flex-col justify-center items-center bg-gray-500 p-8
    `}>
      <div className={`
        w-full h-full flex flex-row justify-center items-start gap-8
        `}>
        <aside className={`
            w-80 h-full bg-gray-800 p-4
          `}>
          <MenuItems />
        </aside>
        <aside className={`
            h-full bg-gray-800 flex-1 p-4
          `}>
          <EditPage />
        </aside>
      </div>
    </section>
  );
}

export default Dashboard;