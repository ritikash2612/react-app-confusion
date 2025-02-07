import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{


	renderComments(comments) {
		return (
			<div className = "col-12 col-md-5 m-1">
				<Card>
					<CardBody width="100%">
						<div><h4>Comments</h4>
							{
								comments.map((comm) => {
								let d = new Date(comm.date);
								let a = d.toDateString()
								let b = a.split(' ')
								
								return(
									<ul className="list-unstyled">
										<li>{comm.comment}</li>
										<li>--{comm.author + ', ' + b[1]+' '+b[2]+', '+b[3]}</li>
									</ul>
										)
								})
							}
							
						</div>
					</CardBody>
				</Card>
			</div>
			);
	}


	
	renderSelectedDish(dish){
		

		if(dish != null){
			console.log('true');

			return (
				<div className = "col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" src={dish.image} alt= {dish.name}/>
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>
								{dish.description}
							</CardText>
						</CardBody>
					</Card>
				</div>)
		}else {
			return(<div className = "col-12 col-md-5 m-1"></div>);
		}
	}
		
		
	
	render() {
		if (this.props.selectedDish != null){
			return (
			<div className="row">
				{[this.renderSelectedDish(this.props.selectedDish), this.renderComments(this.props.selectedDish.comments)]}
			</div>
			)
		}
		else {
			return <div></div>
			} 

		}	


}





 export default DishDetail;