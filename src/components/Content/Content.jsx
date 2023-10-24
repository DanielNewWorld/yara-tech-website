import React from 'react';
import styleCSS from './Content.module.css';
import image1 from '../../images/functional-testing.png';
import image2 from '../../images/regression-testing.png';
import image3 from '../../images/performance-testing.png';
import image4 from '../../images/usability-testing.png';

const Content = () => {
    return (
        <div>
            <h1>Software Testing Services Yara Tech</h1>
            <div className={styleCSS.container}>
                <div className={styleCSS.row}>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Functional Testing</h2>
                        <h3>Verify that the software meets the specified functional requirements and works as
                            expected.</h3>
                    </div>
                    <div><img className={styleCSS.imgItem} src={image1} alt='imagecontent'/></div>
                </div>

                <div className={styleCSS.row}>
                    <div><img className={styleCSS.imgItem} src={image2} alt='imagecontent'/></div>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Regression Testing:</h2>
                        <h3>Ensure that changes or updates to the software haven't introduced new defects or affected
                            existing functionality.</h3>
                    </div>
                </div>

                <div className={styleCSS.row}>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Performance Testing:</h2>
                        <h3>Evaluate the software's performance under various workloads and stress conditions to
                            identify bottlenecks and optimize its speed and scalability.
                        </h3>
                    </div>
                    <div><img className={styleCSS.imgItem} src={image3} alt='imagecontent'/></div>
                </div>

                <div className={styleCSS.row}>
                    <div><img className={styleCSS.imgItem} src={image4} alt='imagecontent'/></div>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Usability Testing:</h2>
                        <h3>Evaluate the software's user interface (UI) and user experience (UX) to ensure it is
                            intuitive, easy to navigate, and meets the needs of the target audience.
                        </h3>
                    </div>
                </div>

                <div className={styleCSS.row}>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Compatibility Testing:</h2>
                        <h3>Verify that the software works correctly on different platforms, browsers, operating
                            systems,
                            and
                            devices, ensuring a seamless user experience across various environments.</h3>
                    </div>
                    {/*<div><img className={styleCSS.imgItem} src={image3} alt='imagecontent'/></div>*/}
                </div>

                <div className={styleCSS.row}>
                    {/*<div><img className={styleCSS.imgItem} src={image4} alt='imagecontent'/></div>*/}
                    <div>
                        <h2>Localization Testing:</h2>
                        <h3>Validate the software's adaptability to different languages (English, Ukrainian, Russian),
                            cultures,
                            and
                            regions, ensuring accurate translation, date formats, and localized content.</h3>
                    </div>
                </div>

                <div className={styleCSS.row}>
                    <br/>
                    <h2>Accessibility Testing:</h2>
                    <h3>Ensure the software is accessible to users with disabilities, complying with accessibility
                        standards,
                        such as WCAG (Web Content Accessibility Guidelines).</h3>
                </div>

                <div className={styleCSS.row}>
                    <div></div>
                    <h2>Mobile App Testing:</h2>
                    <h3>Test mobile applications across different devices, screen resolutions, and operating systems
                        to
                        ensure
                        they function properly and provide an optimal user experience.</h3>
                </div>

                <div className={styleCSS.row}>
                    <br/>
                    <h2>Test Automation: </h2>
                    <h3>Develop and implement automated testing frameworks, scripts, and tools to improve testing
                        efficiency,
                        reduce time-to-market, and enhance test coverage.</h3>
                </div>

                <div className={styleCSS.row}>
                    <h2>Test Documentation:</h2>
                    <h3>Create comprehensive test plans, test cases, and test reports that document the testing
                        process,
                        results, and any defects found.</h3>
                </div>

                <div className={styleCSS.row}>
                    <h2>Continuous Integration and Continuous Delivery (CI/CD) Testing:</h2>
                    <h3>Integrate testing into the CI/CD pipeline to ensure rapid and reliable software releases
                        with
                        automated
                        testing at each stage.</h3>
                </div>

                <div className={styleCSS.row}>
                    <h2>Exploratory Testing:</h2>
                    <h3>Conduct ad-hoc testing, exploring the software to discover new defects, usability issues,
                        and
                        edge
                        cases
                        that may have been missed during structured testing.</h3>
                </div>

                <div className={styleCSS.row}>
                    <h2>API Testing:</h2>
                    <h3>Validate the functionality, reliability, and security of application programming interfaces
                        (APIs)
                        to
                        ensure seamless integration between software components.</h3>
                </div>
            </div>
        </div>
    );
};

export default Content;