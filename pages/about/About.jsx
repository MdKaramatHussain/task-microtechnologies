import React from 'react'
import AboutCard from './AboutCard'

function About() {
    let content = 'FOR STARTUP AND GROWING BUSINESS, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTIES, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM'
    return (
        <div>
            <div style={{ textAlign: 'center', fontSize:'45px', color: 'white', fontWeight: 'bold', backgroundImage: 'radial-gradient(circle, #082719, #08090C)' }}><span>Services We're Offerning</span></div>
            <div className='justify-content-between g-5'>
                <div style={{ display: 'flex', flexDirection: 'row', padding:'20px' }}>
                    <div style={{marginLeft:'140px'}}>
                        <AboutCard pic='../web.jpg' title='Web Design' content={content} color='#A24E64' />
                    </div>
                    <div style={{marginLeft:'140px'}}>
                        <AboutCard pic='../mob.jpg' title='Web/Mobile Application' content={content} color='#316043' />
                    </div>
                </div>
                <div  style={{ display: 'flex', flexDirection: 'row', padding:'20px'  }}>
                    <div style={{marginLeft:'140px'}}>
                        <AboutCard pic='../seo.jpg' title='SEO' content={content}  color='#32222E'/>
                    </div>
                    <div style={{marginLeft:'140px'}}>
                        <AboutCard pic='../dm.jpg' title='Digital Marketing' content={content} color='#8A9FB8' />
                    </div>
                </div>
                <div  style={{ display: 'flex', flexDirection: 'row', padding:'20px'  }}>
                    <div style={{marginLeft:'140px'}}>
                        <AboutCard pic='../devops.jpg' title='Dev Ops' content={content}  color='#8B4B20'/>
                    </div>
                    <div style={{marginLeft:'140px'}}>
                        <AboutCard pic='../data.jpg' title='Data Science' content={content} color='#2D5697'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
