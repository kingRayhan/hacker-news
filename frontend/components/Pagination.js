import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <div class="news-list-nav">
                <a class="disabled">&lt; prev</a>
                <span>1/25</span>
                <a href="/new/2" class="">
                    more &gt;
                </a>
            </div>
        )
    }
}
