import './css/components/Dashboard.scss'
import React from 'react';
import Toggle from './components/Toggle.js';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__inner">
                <nav className="nav-bar grid gap-y-4"> 
                    <span class="active material-icons icon">
                        home
                    </span>
                    <span class="material-icons icon">
                        home
                    </span>
                    <span class="material-icons icon">
                        home
                    </span>
                    <span class="material-icons icon">
                        home
                    </span>
                    <span class="material-icons icon">
                        home
                    </span>                                                                             
                </nav>
                <div className="grid grid-cols-12 gap-12 w-full"> 
                    <div className="col-span-8 menu"> 
                    {/* <button className="button--default"> Add device </button> */}
                    <div className="dashboard--top">
                        <span> 
                            <h2> Good afternoon, Regan </h2>
                            <p> Have a very nice day </p>
                        </span>
                    </div>
                    <div className="sub-menu">
                        <a class="active"> Living Room </a>
                        <a> Dining Room </a>
                        <a> Bed Room </a>
                        <a> Bath Room </a>
                        <a> Backyard </a>
                    </div>
                    <div className="controls grid gap-y-5 gap-x-5">
                        <div className="card room-camera col-span-12"> </div>
                        <Toggle icon="ac_unit" title="Air Conditioner" name="toggle-1" />
                        <Toggle icon="tv" title="AndroidTV" name="toggle-2" />
                        <Toggle icon="air" title="Air Purifier" name="toggle-3" />
                        <Toggle icon="lightbulb" title="Ambient Light" name="toggle-4" />
                    </div>                    
                </div>
                    <div className="col-span-4"> 
                        <div className="card-bg w-full h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
