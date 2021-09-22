import React, { Component} from "react";
import {Container,Row} from 'reactstrap';
import { Button} from 'reactstrap';
import {  CardTitle,CardText, Card } from "reactstrap";

import Moment from 'moment';
class Staffname extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedStaff : null,
         }
    }
    onStaffselected(staff){
        this.setState(
            {selectedStaff: staff}
        );
    }
    renderStaff(staff){
        if(staff !=null){
            return(
                
                  
                   
                    <Card body inverse color="danger" style={{padding:"10px", borderRadius:"10px" }}>
                        
                        <CardTitle tag="h2">Họ và tên: {staff.name}</CardTitle>
                       <CardText  >Ngày Sinh: {Moment(staff.doB).format("DD-MM-YYYY")}</CardText>
                       <CardText>PHòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText >Số ngày đã làm thêm: {staff.overTime}</CardText>  
                        
                  
                   </Card>
           
            
              
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    componentDidMount(){
        console.log("start")
    }
    render(){   
        
        const Name = this.props.staffs.map(staff => { 
           
            return(
                <div>     
                <div key={staff.id} className="col-md-4 col-xs-12 col-sm-6" style={{ paddingBottom: "10px" }}>
                <Button color="primary" onClick={() => this.onStaffselected(staff)}  size="lg"  block >{staff.name} </Button>    
              </div>
              </div>    
            )
        });
        return(
           <Container className="themed-container" fluid={true}>
               <Row> {Name} </Row>
               <Row className="title" ><h1 style={{color:"white" , backgroundColor: '#DC143C', padding:"20px", borderRadius:"10px" }}>Bấm vào tên nhân viên để xem thông tin</h1></Row>
               <Row className="title" >{this.renderStaff(this.state.selectedStaff)}</Row>
           </Container>
        )
    }
    
}
export default Staffname;