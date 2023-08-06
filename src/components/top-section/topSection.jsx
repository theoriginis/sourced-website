import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";

class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_events: "",
      activeItem: -1,
    };
  }

  render() {
    return (
      <div>
      <section class="section events" id="artists">
		<div class="container">			
			<div class="row">
			<div class="col-lg-12 wow slideInLeft" style={{animationDuration: "3s"}}> 
					<div class="col-lg-4 pad10 wow slideUp" style={{animationDuration: "2s"}}> 
						<h1> Artists</h1>	
						<div class="event_box"> 
							<div class="date"> <h3>1</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>2</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>3</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>4</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>5</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
					</div>

					<div class="col-lg-4 pad10 wow slideUp" style={{animationDuration: "2s"}}> 
						<h1>Top Sports</h1>	
						<div class="event_box"> 
							<div class="date"> <h3>1</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>2</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>3</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>4</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>5</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
					</div>
				 
					<div class="col-lg-4 pad10 wow slideUp" style={{animationDuration: "2s"}}> 
						<h1>Top Shows</h1>	
						<div class="event_box"> 
							<div class="date"> <h3>1</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>2</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>3</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>4</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
						<div class="event_box"> 
							<div class="date"> <h3>5</h3></div>
							<div class="Info"> <h3>Jake Paul </h3>   
							</div> 
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
export default withRouter(
  connect(mapStateToProps, {

  })(TopSection)
);
