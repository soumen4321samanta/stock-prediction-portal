import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light text-center'>Stock Prediction Portal</h1>
                <p className='text-light  lead'>The Stock Prediction Portal is a web-based application designed to forecast stock market trends using machine learning algorithms. The system analyzes historical stock prices, trading volumes, and other market indicators to generate future predictions and trend analysis. Built with technologies like Python, Django, and scikit-learn, the portal provides users with interactive dashboards, data visualization, and real-time analytics to support informed investment decisions.</p>
                <Button text='Login' class="btn-outline-info"/>
            </div>
        </div>
    </>
  )
}

export default Main