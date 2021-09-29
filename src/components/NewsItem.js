import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
        let { title, description, newsUrl, imageUrl } = this.props;
        return (
            <div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={imageUrl ? imageUrl : "https://www.sammobile.com/wp-content/uploads/2020/10/Galaxy-S20-FE-review-8-720x405.jpg"} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" class="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}