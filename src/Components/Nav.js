import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/general">Newsline</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/general">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/business">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/technology">Tech</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/sports">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/entertainment">Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/health">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/science">Science</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
