import React, {useEffect} from 'react';
import "./Vacancies.scss"
import {getVacancies,changeBranch} from "../../redux/reducers/vacancies";
import SelectBranch from "../../Components/SelectBranch/SelectBranch";
import BranchMenu from "../../Components/BranchMenu/BranchMenu";
import {ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
// import Video from "./Video/Video";



const Vacancies = () => {
    const dispatch = useDispatch()
    const {data, filter} = useSelector((store) => store.vacancies )

    useEffect(() => {
        dispatch(getVacancies(filter))
    }, [filter])

    return (
        <section className='vacancies'>
            <div className="vacancies__container container">
                {/*<Video/>*/}
                <div className="vacancies__content">
                    <div className="vacancies__menu">
                        {
                            data && data.map((item) =>  (
                                <div key={item._id} className="vacancies__card">
                                    <div className="vacancies__text">
                                        <h3 className='vacancies__name'>
                                            {item.title}
                                        </h3>
                                        <p className='vacancies__description'>
                                            {item.description}
                                        </p>
                                    </div>
                                    <p className='vacancies__location'>
                                        <SelectBranch branch={item.branch}/>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <BranchMenu changeBranch={changeBranch} route={'vacancies'}/>
                </div>


            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};

export default Vacancies;