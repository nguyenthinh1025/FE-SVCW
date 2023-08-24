
import React from 'react'
export default function CompleteProfile () {
    return (
        <div className="widget"><h4 className="widget-title">Complete Your Profile</h4><span>Your Profile is missing followings!</span><div data-progress="tip" className="progress__outer" data-value="0.67"><canvas width={125} height={125} style={{ height: 100, width: 100 }} /><div className="progress__inner">82%</div></div><ul className="prof-complete"><li><i className="icofont-plus-square" /> <a href="#">Upload Your Picture</a><em>10%</em></li><li><i className="icofont-plus-square" /> <a href="#">Your University?</a><em>20%</em></li><li><i className="icofont-plus-square" /> <a href="#">Add Payment Method</a><em>20%</em></li></ul></div>
    )
}

