import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);

    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish){
      if(dish!=null){
        var comm = dish.comments;
      if (comm.length!==0)
            return(
                <Card key={dish.id}>
                    <CardBody>
                      <CardTitle><h4>Comments</h4></CardTitle>
                      <CardText>{ 
                            comm.map( (com) => {
                              return (<ul class="list-unstyled">
                                          <li>{com.comment}</li>
                                          <li>-- {com.author}, {new Intl.DateTimeFormat('en-US', {
                                                          year: 'numeric',
                                                          month: 'short',
                                                          day: '2-digit'
                                                          }).format(new Date(com.date))}</li>
                                    </ul>);
                              
                            })
                      }
                      </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
      }
      else
            return(
                <div></div>
            );
        
    }

    render(){
        return (
            <div className="container">
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.dish)}
                </div>
              </div>
          </div>
        );
    }
}

export default DishDetail;