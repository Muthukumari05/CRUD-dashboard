import * as React from 'react';
// import { Link } from "react-router-dom";
import Header from './header.component';
import MainPage from './create-user.component';
interface IProps {
}
interface IState {
}

class Dashboard extends React.Component<IProps, IState> {


    public componentDidMount() {

    }

    public render(): React.ReactNode {
        return (
            <div className='dashboard-container'>
                <div className='header-content'>
                        <Header />
                </div>
               <div className='table-content'> 
                        <MainPage />
               </div>
            </div>
        );
    }
}
export default Dashboard;