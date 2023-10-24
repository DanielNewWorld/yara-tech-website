import React from 'react';
import styleCSS from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styleCSS.aboutUs}>
            <h1>QA Manual and Automation Services.</h1>
            <h3>Expertise in Web Application and Mobile Testing for Software Quality Assurance</h3>
            <h2>Testing Proficiency:</h2>
            <ul>
                <h3>
                    <li>Skilled in both Manual and Automation Testing, with 4-5 years of hands-on experience in each
                        domain.
                    </li>
                    <li>Proficient in utilizing automation tools such as Selenium with Java and WebdriverIO with
                        TypeScript to automate test scenarios, enhancing efficiency and accuracy.
                    </li>
                </h3>
            </ul>

            <h2>Adaptive Testing Strategies:</h2>
            <h3>Well-versed in various Software Development Life Cycle (SDLC) methodologies, including Waterfall and Agile models, enabling flexible adaptation of testing strategies to project requirements.</h3>

            <h2>Customer-Centric Approach:</h2>
            <h3>Leveraging 12 years of extensive Customer Service experience to provide exceptional support and deeply understand client requirements.</h3>

            <h2>Thorough Requirement Analysis:</h2>
            <h3>Extensive experience in working with requirements, performing meticulous analysis, and ensuring comprehensive test coverage to minimize risks.</h3>

            <h2>Robust Test Documentation:</h2>
            <h3>Proficient in creating comprehensive test documentation, including meticulous test plans, precise test cases, well-structured test scripts, and detailed bug reports to maintain transparency and traceability.</h3>

            <h2>Effective Communication:</h2>
            <h3>Strong communication skills facilitate seamless collaboration with cross-functional teams, ensuring alignment and successful project outcomes.</h3>

            <h2>Comprehensive Services</h2>
            <h3>We offer a wide range of services to meet your QA needs:
                <ul>
                    <li>Test planning and execution</li>
                    <li>Defect management</li>
                    <li>Test Automation with expertise in Automation frameworks using TypeScript, JavaScript, Java, and Python</li>
                    <li>Utilization of Tools like Selenium, WebdriverIO, Cypress, and Playwright for automation</li>
                    <li>Manual Testing</li>
                    <li>API Testing and Automation</li>
                    <li>Continuous integration</li>
                    <li>Performance testing</li>
                    <li>Detailed and insightful reporting</li>
                </ul>
            </h3>
            <h3>At Yara Tech, we are dedicated to ensuring the quality and functionality of your software products, adapting to your project's unique requirements and delivering exceptional service.</h3>
        </div>
    );
};

export default AboutUs;