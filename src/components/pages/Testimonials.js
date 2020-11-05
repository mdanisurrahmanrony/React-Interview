import React, { Component } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <div class="body-inner">
	 {/* Header start */}
	<Header></Header>
	<div id="banner-area">
		<img src="assets/images/banner/banner2.jpg" alt ="" />
		<div class="parallax-overlay"></div>
			 {/* Subpage title start */}
			<div class="banner-title-content">
	        	<div class="text-center">
		        	<h2>Testimonials</h2>
		        	<ul class="breadcrumb">
			            <li>Home</li>
			            <li>Company</li>
			            <li><a href="#"> Testimonials</a></li>
		          	</ul>
	          	</div>
          	</div> {/* Subpage title end */}
	</div> {/* Banner area end */}

	 {/* Main container start */}

	<section id="main-container">
		<div class="container">

			 {/* Services */}

			<div class="row">
				<div class="col-md-12 heading">
					<span class="title-icon classic pull-left"><i class="fa fa-cogs"></i></span>
					<h2 class="title classic">What Our Clients Say</h2>
				</div>
			</div>

			
			<div class="row">
				<div class="col-md-6 col-sm-6">
					<div class="ts-testimonial-content">
						<img src="assets/images/clients/testimonial1.jpg" alt="testimonial"/>
			            <p class="ts-testimonial-text">
			              Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is that it as opposed to using.Generators on the Internet tend to repeat predefined chunks as necessary, making this the first true evere generator on the Internet. It uses a dictionary of over 200 Latin words, combined with generate Lorem Ipsum which looks reasonable.
			            </p>

			            <div class="ts-testimonial-author">
	            			<h3 class="name">Tahlia Bidmead<span>Chief Operation Officer</span></h3>
	          			</div>
		          	</div> {/* Testimonial content end */}
		          	
				</div> {/* End col-md-6 */}

				<div class="col-md-6 col-sm-6">
	          		<div class="ts-testimonial-content">
						<img src="assets/images/clients/testimonial2.jpg" alt="testimonial"/>
			            <p class="ts-testimonial-text">
			              Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is that it as opposed to using.Generators on the Internet tend to repeat predefined chunks as necessary, making this the first true evere generator on the Internet. It uses a dictionary of over 200 Latin words, combined with generate Lorem Ipsum which looks reasonable.
			            </p>

			            <div class="ts-testimonial-author">
	            			<h3 class="name">John Anderson<span>General Manager</span></h3>
	          			</div>
		          	</div> {/* Testimonial content end */}

				</div> {/* End col-md-6 */}
			</div> {/* Content row  end */}

		</div> {/*/ container end */}

	</section> {/*/ Main container end */}
	
	<section class="call-to-action">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h3>Join with BizCraft and Give Your Website a Brand New Look</h3>
					<a href="#" class="pull-right btn btn-primary white">Purchase Now</a>
				</div>
			</div>
		</div>
	</section>

	 {/* Footer start */}
	<Footer></Footer>
            </div>
                
            </div>
        )
    }
}