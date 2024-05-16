import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import PieChart from './components/Piechart/Piechart';
import Fitness from './components/Fitness/Fitness';
import Appointments from './components/Appointments/Appointments';
import EnhancedTable from './components/Table/Table';

function App() {
  return (
    <div className="app">
      <div className="glass">
        <div className="item1 rounded ">
          <Sidebar />
        </div>
        <div className="item2 rounded">
          <PieChart />
        </div>
        <div className="item3 rounded">
          <Fitness />
        </div>
        <div className="item4 rounded">
          placeholder
        </div>
        <div className="item5 rounded">Quote of Day</div>
        <div className="item8 rounded">
          <EnhancedTable />
        </div>
      </div>
    </div>
  );
}

export default App;
