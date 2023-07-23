import React from 'react'
// import ReactDOM from 'react-dom'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({color:'black',
    // backgroundColor:'white'})

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'rgb(18 18 18)':'white'
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white', backgroundColor:'black',
    //             border:'1px solid white'
    //         })

    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black', backgroundColor:'white'
    //         })

    //         setBtnText("Enable Dark Mode")
    //     }
    // }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze/Manipulate your text.</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                {/* Textutils provides you a way to analyze your text quickly and efficiently as per your requirements. */}
                Welcome to our text analysis and manipulation tool! With this powerful feature, you can effortlessly analyze and manipulate your text to gain valuable insights and customize it according to your specific needs.
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                Welcome to our free-to-use platform! We are thrilled to offer you an array of incredible features and services at absolutely no cost. Whether you're an individual or a business, our platform is designed to cater to your needs and empower your goals without any financial constraints.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                Welcome to our browser-compatible platform! We understand the importance of accessibility and convenience, which is why our services are fully optimized to work seamlessly across a wide range of web browsers. Whether you prefer Chrome, Firefox, Safari, Edge, or any other popular browser, you can enjoy a consistent and smooth experience without any compatibility issues.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className='btn btn-primary'>{btnText}</button>
        </div> */}
        
    </div>
  )
}
