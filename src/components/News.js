import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=cccfc4b063c04169ba75f2e4517a3821&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles})
    }
    handleNexClick = async ()=>{
        console.log("Next");
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cccfc4b063c04169ba75f2e4517a3821&page=${this.state.page + 1}`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parsedData.articles
        // })
    }
    handlePreClick = async ()=>{
        console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cccfc4b063c04169ba75f2e4517a3821&page=${this.state.page - 1}`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles
        // })
    }
    render() {
        return (
            <div className="container my-4">
                <h1>NewsMonkey - Top Headlines </h1>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-4">
                            <NewItem title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage?element.urlToImage:element.urlToImage="https://images.moneycontrol.com/static-mcnews/2023/08/Collage-Maker-11-Aug-2023-08-03-AM-2779-770x433.jpg"} NewsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
                        Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News