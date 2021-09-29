import React from 'react'
import NewsItem from './NewsItem'
import { Component } from 'react'


export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db8f1c6d45454894a3ffc4d5771d6dbd&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    };

    handleNextClick = async () => {
        console.log("Next");
        window.scrollTo(0, 0)
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        }

        else {
            let url = `https://newsapi.org/v2/top-headlines?country=pk&category=business&apiKey=db8f1c6d45454894a3ffc4d5771d6dbd&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }

    }

    handlePrevClick = async () => {
        console.log("Previous");
        window.scrollTo(0, 0)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db8f1c6d45454894a3ffc4d5771d6dbd&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });

    }



    render() {
        return (
            <div className="container my-3 mb-3">
                <h4 className="text-center" >Daily-Dose News Top Headlines</h4>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4 my-3 mb-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>)
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick} > &larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" class="btn btn-dark" onClick={this.handleNextClick}> Next&rarr;</button>
                </div>
            </div>
        )
    }
}
