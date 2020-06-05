import React from 'react';
import './EyeFollow.css';


function eyeball(e) {
  var eye = document.querySelectorAll('.eye');
  eye.forEach(function(eye) {
    let x = (eye.getBoundingClientRect().left + eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top + eye.clientHeight / 2);
    let radian = Math.atan2(e.clientX - x, e.clientY - y)
    let rot = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  })
}

function EyeFollow() {
  return (
    <div className="eye-follow-c" onMouseMove={(e) => eyeball(e)}>
      <div className="eye-follow-w">
        <div className="face">
          <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EyeFollow;