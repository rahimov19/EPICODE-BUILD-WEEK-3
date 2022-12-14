import React, { useState, useRef } from "react";

import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

export default function PostPopover() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <i class="bi bi-three-dots" onClick={handleClick}></i>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3"></Popover.Header>
          <Popover.Body as="div" className="popoverBody">
            <ul className="popoverul">
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
              <li>
                <div>star</div>
                <div>Stick to top</div>
              </li>
            </ul>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
