import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as newActions from '../../actions/newActions';
import News from '../news/news';
import Button from 'arui-feather/button';
import Form from 'arui-feather/form';
import Label from 'arui-feather/label';
import Textarea from 'arui-feather/textarea';
import Input from 'arui-feather/input';

const buttons = [
    { size: 'l', name: ' Добавить новость' }
];

const elipsisBoxStyles = {
    width: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};

function mapStateToProps(state)
{
    return {
        user: state.user,
        news: state.news
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newActions: bindActionCreators(newActions, dispatch)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputNewsTitle;
        this.inputNewsDesc;
        this.inputNewsIMG;
        this.textareaNewsDesc;

    }


    render() {
        return (
            <div>
                <h1>React</h1>

                <form id="myform">
                <p className="lead">My names is {this.props.user.name} {this.props.user.surname}</p>
                <p className="lead">My age is {this.props.user.age}</p>

                <div style={ elipsisBoxStyles }><Label isNoWrap={ true }>Заголовок <span>*</span>: </Label></div> 
                <br/><Input id = "title"
        size='m' type="text"/><br/>
                 <div style={ elipsisBoxStyles }><Label isNoWrap={ true }>Краткое описание <span>*</span>: </Label></div><br/><Input type="text" id = "kdesc"/><br/>
                 
                <div style={ elipsisBoxStyles }><Label isNoWrap={ true }> Ссылка на картинку:</Label> </div><br/><Input type="text" id = "image"/><br/>
                <div style={ elipsisBoxStyles }><Label isNoWrap={ true }> Полное описание <span>*</span>:</Label></div> <br/><Textarea id = "desc" />
                <br/><br/>

                {buttons.map(({ size, name }) => (
                     <Button size={size} onClick={ () => this.handleClick() }>
                        {name}
                     </Button>
                ))}
                </form>

                <News items={ this.props.news } onHandleClick={ this.handleNewsClick } />
        
            </div>
        );
    }

    handleClick() {
        let { news} = this.props;
        var newsTitle = document.getElementById('title');
        var newsDescr = document.getElementById('kdesc');
        var newsImg = document.getElementById('image');
        var NewsDescf = document.getElementById('desc');
       

        if(!newsTitle.value.length == 0 && !newsDescr.value.length == 0 && !NewsDescf.value.length == 0)
        {
         if(newsImg.value.length == 0)
        {
        newsImg.value = 'https://www.autoskipper.ru/upload/resizer2/23/740/7401b8cc54de07655d8b6f3a1c2d70cb.png';
        }
           news.unshift({
            title: newsTitle.value,
            descr: newsDescr.value,
            img: newsImg.value,
            f_desct: NewsDescf.value

        });

         newsTitle.value = "";
        newsDescr.value = "";
         newsImg.value = "";
        NewsDescf.value = "";

        }
        else
        {
            alert("Зар, заполни все необходимые поля:)");
        }
     

       


        newActions.newsAdd(this.setState(news));
        // newsAdd(news);
    }

    handleNewsClick(params) {
        console.log('####: params: ', params);
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

