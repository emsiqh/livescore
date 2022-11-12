import { SideBar, MainTable } from '../components';

const Container = () => {

    return (
        <div className="container">
            <div className="container__content content" >
                <div className="container__main" id="main" >
                    <div className="container__mainInner">
                        <SideBar />
                        <MainTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container