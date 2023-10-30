import React from 'react';
import styleCSS from './HowWeWork.module.css';
import image1 from '../../images/test-planning-1-2-days.png';
import image2 from '../../images/test-case-creation-2-3-weeks.png';
import image3 from '../../images/manual-testing-3-4-weeks.png';
import image4 from '../../images/automation-script-development-3-4-weeks.png';
import image5 from '../../images/automation-execution-and-debugging-3-4-weeks.png';
import image6 from '../../images/reporting-and-documentation.png';

const HowWeWork = () => {
    return (
        <div>
            <div className={styleCSS.howwework}>
                <div className={styleCSS.rowGray}>
                    <div>
                        <br/><br/><br/><br/>
                        <h2>Test Planning (1-2 days)</h2>
                        <h3>Defining the scope, objectives, and test cases, including login and shopping cart functionality.</h3>
                    </div>
                    <div><img className={styleCSS.imgItem} src={image1} alt='imagecontent'/></div>
                </div>

                <div className={styleCSS.rowWhite}>
                    <div><img className={styleCSS.imgItem} src={image2} alt='imagecontent'/></div>
                    <div>
                        <br/><br/><br/><br/>
                        <h2>Test Case Creation (2-3 weeks)</h2>
                        <h3>Writing comprehensive test cases covering basic functionality, browser compatibility, login, and shopping cart.</h3>
                    </div>
                </div>

                <div className={styleCSS.rowGray}>
                    <div>
                        <br/><br/><br/><br/>
                        <h2>Manual Testing (3-4 weeks)</h2>
                        <h3>Manually executing test cases, including login and shopping cart scenarios, and performing browser compatibility testing.</h3>
                    </div>
                    <div><img className={styleCSS.imgItem} src={image3} alt='imagecontent'/></div>
                </div>

                <div className={styleCSS.rowWhite}>
                    <div><img className={styleCSS.imgItem} src={image4} alt='imagecontent'/></div>
                    <div>
                        <br/><br/><br/><br/>
                        <h2>Automation Script Development (3-4 weeks)</h2>
                        <h3>Creating automated scripts for essential test cases, which now include login and shopping cart functionality, and browser compatibility testing.</h3>
                    </div>
                </div>

                <div className={styleCSS.rowGray}>
                    <div>
                        <br/><br/><br/><br/>
                        <h2>Automation Execution and Debugging (3-4 weeks)</h2>
                        <h3>Running automated tests, identifying and addressing any issues, and ensuring login and shopping cart processes work correctly.</h3>
                    </div>
                    <div><img className={styleCSS.imgItem} src={image5} alt='imagecontent'/></div>
                </div>

                <div className={styleCSS.rowWhite}>
                    <div><img className={styleCSS.imgItem} src={image6} alt='imagecontent'/></div>
                    <div>
                        <br/><br/><br/><br/>
                        <h2>Reporting and Documentation: Ongoing</h2>
                        <h3>Continuously documenting and reporting test results and issues.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;