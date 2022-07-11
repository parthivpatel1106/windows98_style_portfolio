import React, { useState } from "react";
import { AppFrame } from "./AppFrame";
import "../style/TaskManager.css";
import sscIcon from "../images/menubar/Academics/certificate_0.png"
import enggIcon from "../images/menubar/Academics/certificate_seal.png"
import {CategoryScale} from 'chart.js'; 
import { PerformanceChart } from "./PerformanceChart";
import Chart from 'chart.js/auto';
import TaskManagerIcon from "../images/apps/taskmanagericon.png"

Chart.register(CategoryScale);

export const TaskManager = (props) => {
  const [tabChange, setTabChange] = useState(1);
  const viewTab = (index) => {
    setTabChange(index);
  };
  const setActiveTab = (index, className) =>
    tabChange === index ? className : "";
  return (
    <div className="taskmanager">
      <AppFrame popClose={props.popClose} titlename={"Task Manger - Qualification"} icon={TaskManagerIcon}>
        <div className="tm-container">
          <ul className="tm-tabs">
            <li
              className={`tm-tab ${setActiveTab(1, "tm-tab-1")}`}
              onClick={() => viewTab(1)}
            >
              Academics
            </li>
            <li
              className={`tm-tab ${setActiveTab(2, "tm-tab-2")}`}
              onClick={() => viewTab(2)} 
            >
              Performance
            </li>
            <li
              className={`tm-tab ${setActiveTab(3, "tm-tab-3")}`}
              onClick={() => viewTab(3)}
            >
              Activities
            </li>
          </ul>
          <div className="tm-container-content">
            <div className={`tm-content-1 ${setActiveTab(1, "tm-active-tab")}`}>
              <div className="tm-tab-content academics-tab">
                <table className="at-table">
                    <tbody className="at-table-body">
                      <tr className="at-table-row-name">
                        <th className="at-table-data">
                          Task
                        </th>
                        <th className="at-table-data">
                          Status
                        </th>
                        <th className="at-table-data">
                          Execution
                        </th>
                      </tr>
                      <tr className="at-table-row">
                        <td className="at-table-data">
                          <div className="row-data">
                            <img src={enggIcon}/>
                            <p>Training</p>
                          </div>
                        </td>
                        <td className="at-table-data">
                          -
                        </td>
                        <td className="at-table-data">
                          Running
                        </td>
                      </tr>
                      <tr className="at-table-row">
                        <td className="at-table-data">
                          <div className="row-data">
                            <img src={enggIcon}/>
                            <p>Graduation</p>
                          </div>
                        </td>
                        <td className="at-table-data">
                          80%
                        </td>
                        <td className="at-table-data">
                          Completed
                        </td>
                      </tr>
                      <tr className="at-table-row">
                        <td className="at-table-data">
                          <div className="row-data">
                            <img src={sscIcon}/>
                            <p>HSC</p>
                          </div>
                        </td>
                        <td className="at-table-data">
                          63%
                        </td>
                        <td className="at-table-data">
                          Completed
                        </td>
                      </tr>
                      <tr className="at-table-row">
                        <td className="at-table-data">
                          <div className="row-data">
                            <img src={sscIcon}/>
                            <p>SSC</p>
                          </div>
                        </td>
                        <td className="at-table-data">
                          77%
                        </td>
                        <td className="at-table-data">
                          Completed
                        </td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
            <div className={`tm-content-2 ${setActiveTab(2, "tm-active-tab")}`}>
              <div className="tm-tab-content performance-tab">
                <div className="result-chart">
                  <PerformanceChart/>
                </div>
                <div className="result-details">
                  {/* <p>Available (CGPA)= 08.54</p> */}
                  <fieldset><legend>Available (CGPA)</legend>08.54 out of 10.00</fieldset>

                  {/* <p>Total (CGPA)= 10.00</p> */}
                  {/* <fieldset><legend>Total (CGPA)</legend>10.00</fieldset> */}
                  <fieldset><legend>Percentage</legend>80.05%</fieldset>
                  {/* <p>Type= B.Tech</p> */}
                  <fieldset><legend>Type</legend>B.Tech</fieldset>
                  {/* <p>Sub-Type= Computer Science and Engg.</p> */}
                  <fieldset><legend>Sub-Type</legend>Computer Science and Engg.</fieldset>
                  {/* <p>University= GTU</p> */}
                  <fieldset><legend>University</legend>Gujarat Technological Uni.</fieldset>
                  {/* <p>Batch= 2017 - 2021</p> */}
                  <fieldset><legend>Batch</legend>2017-2021</fieldset>
                  {/* <p>Slot: 1 out of 2</p> */}
                  {/* <p>Current Thread= Assistant System Engineer Trainee</p> */}
                  <fieldset><legend>Current Thread</legend>Assistant System Engineer Trainee</fieldset>
                  {/* <p>Version: Y</p> */}
                  {/* <p>Thread Location= Tata Consultancy Services</p> */}
                  <fieldset><legend>Thread Location</legend>Tata Consultancy Services</fieldset>
                </div>
              </div>
            </div>
            <div className={`tm-content-3 ${setActiveTab(3, "tm-active-tab")}`}>
                <div className='tm-tab-content activities-tab'>
                  <div className="activity">
                  <fieldset><legend>Activity</legend>
                  <table>
                    <tbody>
                      <tr>
                        <th>name</th>
                        <th>status</th>
                      </tr>
                      <tr>
                        <td>Java</td>
                        <td>Enabled</td>
                      </tr>
                      <tr>
                        <td>Python</td>
                        <td>Enabled</td>
                      </tr>
                      <tr>
                        <td>HTML, CSS, JS</td>
                        <td>Enabled</td>
                      </tr>
                      <tr>
                        <td>DBMS</td>
                        <td>Enabled</td>
                      </tr>
                      <tr>
                        <td>React, Node</td>
                        <td>Enabled</td>
                      </tr>
                      <tr>
                        <td>Oracle HCM</td>
                        <td>Enabled</td>
                      </tr>
                      
                    </tbody>
                  </table>
                  </fieldset>
                  </div>
                  <div className="activity extra-activity">
                  <fieldset><legend>Extra Activity</legend>
                  <table>
                    <tbody>
                      <tr>
                        <th>name</th>
                        <th>status</th>
                      </tr>
                      <tr>
                        <td>Photography</td>
                        <td>Enabled</td>
                      </tr>
                      <tr>
                        <td>UI/UX Designing</td>
                        <td>Enabled</td>
                      </tr>
                    </tbody>
                  </table>
                  </fieldset>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </AppFrame>
    </div>
  );
};
