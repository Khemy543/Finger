import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card , Avatar} from 'antd';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap'; 
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/postcard.css';
import { relative } from 'path';
const { Meta } = Card;

class Topiccard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          resultB: this.props.some,
          //result2 : this.props.some.topics_print.Title ? this.props.some.topics_print.Title : null,
          disabledUpvote: false,
          disabledDownvote: false
    }
}

      handleUpvoteClicked() {
        const downvoteDisabled = this.state.disabledDownvote;

        if (downvoteDisabled == false) {
          this.setState({ 
            disabledUpvote: true,
            disabledDownvote: false
          });
        } else {
          this.setState({
            disabledUpvote: true,
            disabledDownvote: false
          });
        }


      }   


      handleDownvoteClicked() {
        const upvoteDisabled = this.state.disabledUpvote;
    
        if (upvoteDisabled == false) {
          this.setState({ 
            disabledDownvote: true,
            disabledUpvote: false
          });
        } else {
          this.setState({
            disabledDownvote: true,
            disabledUpvote: false
          });
        }
      } 

    render() {
      console.log(this.state.result);
        return (
          <div>
           <Card
           id="post"
            style= {{ width: 600 }}
            actions={[<Link to= {{ pathname : '/postpage', state : {newData : this.state.result}}} ><Icon type="message" /></Link>, <Icon type="like-o" primary={true} disabled={this.state.disabledUpvote} onClick={this.handleUpvoteClicked.bind(this)}/> ,<h5>{this.state.resultB.UpVoteNumber}</h5>, <Icon type="dislike-o" secondary={true} disabled={this.state.disabledDownvote} onClick={this.handleDownvoteClicked.bind(this)}/>,<h5>{this.state.resultB.DownVoteNumber}</h5>]}>
            <CardBody style={{height:'130px'}}>
            <CardImg top width= "120px" top height="120px" style={{position:'relative', float:'right'}} alt="" src={this.props.some.MediaLink}/>
            <CardTitle top width= "120px" top height="120px"  style={{fontWeight:'1', fontSize:'17px',fontStyle:'Sans-Sarif', position:'relative',float:'left',width:'380px',height:'120px'}}>{this.props.some.Title}</CardTitle>
            </CardBody> 
            <div style={{height:'40px', top:'140px'}}>
            <CardLink style={{float:'left', fontSize:'16px'}} href="#">{this.props.some.UserName} </CardLink>
            <h1 style={{float:'right', fontSize:'14px'}} >12 mins ago</h1>
            </div>
           
            
        </Card>
            </div>
      
        );
      }
    }
    export const TopicCard = Form.create()(Topiccard);