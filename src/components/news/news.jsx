import React from "react";
import ReactDOM from 'react-dom'
import './news.css';
import Toogle from '../toogle/toogle';


class News extends React.Component {

    constructor(props) {
        super(props);
        console.log('####: constructor: ');


        this.state = {
            visible: false
        }
    }

   
  



    render() {
        console.log('####: render: ');
        const { items } = this.props;

        return items.length === 0
            ? <div>У вас нет новостей!</div>
            : this.renderContent()
    }

    renderContent() {
        return (

            <div>
            <p>
                    <b>У вас есть { this.props.items.length } новости!</b>
                </p>
                { this.renderNews() }
                
            </div>
        );
    }

    renderNews() {
        return this.props.items.map((item, index) => {
            return (

  <div className={ 'news' } key={ index }>
                    <div>
                        <img src={ item.img } />
                    </div>
                    <h2 className={ 'news__title' }>
                        { item.title }
                    </h2>

                    <div className={ 'news__descr' }>
                        { item.descr }
                    </div>
                    <Toogle>
                    { item.f_desct }
                    </Toogle>

                </div>

            );
        });
    }

   
}

export default News;