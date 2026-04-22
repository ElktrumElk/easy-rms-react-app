import { useMemo, useRef } from "react"



/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.setChartType - A state function to set the type of chart 
 * @param {Boolean} param0.isVisible
 * @param {Boolean} param0.isElipseClick
 * @returns 
 */
export default function ChartOptPanel({ setChartType, isVisible, isElipseClick }) {

    const panel = useRef(null);

    useMemo(() => {
        if (isElipseClick) {
            if (isVisible) {
                requestAnimationFrame(() => {
                    if (panel.current) {
                        panel.current.style.maxHeight = '400px';
                        panel.current.style.height = 'fit-content';
                    }
                })
            }
        } else {
            panel.current.style.maxHeight = '0';
        }


    }, [isVisible, isElipseClick]);

    return (
        <>
            <div ref={panel} className="chat_opt_panel-11">
                <ul>
                    <li className="chart_list_opt-11" onClick={() => setChartType('BC')} title={'Bar Chart'}>Bar Chart</li>
                    <li className="chart_list_opt-11" onClick={() => setChartType('LC')} title={'Line Chart'}>Line Chart</li>
                    <li className="chart_list_opt-11" onClick={() => setChartType('RC')} title={'Radar Chart'}>Radar Chart</li>
                    <li className="chart_list_opt-11" onClick={() => setChartType('PC')} title={'Pie Chart'}>Pie Chart</li>
                    <li className="chart_list_opt-11" onClick={() => setChartType('BLC')} title={'Bubble Chart'}>Bubble Chart</li>
                    <li className="chart_list_opt-11" onClick={() => setChartType('SC')} title={'Scatter Chart'}>Scatter Chart</li>
                </ul>

            </div>
        </>
    )
}