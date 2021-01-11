import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer>
            <div className="contantLinks">
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jmcho311">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/jmcho311">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:jmcho311@gmail.com">
                            <i class="far fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1uOUsPBv4pwUPXPtYN6YpdnuwLW9_uCX9/view" download>
                            <i class="far fa-file-pdf"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
