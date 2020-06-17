// import React from 'react';
// import ItemsCarousel from 'react-items-carousel';
// import PropTypes from 'prop-types';
//
// export default class Test extends React.Component {
//     componentWillMount() {
//         this.setState({
//             children: [],
//             activeItemIndex: 0,
//         });
//     }
//
//
//
//     render() {
//         return (
//             <div style={{"padding":"0 0px","maxWidth":"100%","margin":"0 auto"}}>
//                 <ItemsCarousel
//                     infiniteLoop={false}
//                     gutter={12}
//                     activePosition={'center'}
//                     chevronWidth={60}
//                     disableSwipe={false}
//                     alwaysShowChevrons={false}
//                     numberOfCards={3}
//                     slidesToScroll={3}
//                     outsideChevron={true}
//                     showSlither={false}
//                     firstAndLastGutter={false}
//                     activeItemIndex={this.state.activeItemIndex}
//                     requestToChangeActive={value => this.setState({ activeItemIndex: value })}
//                     rightChevron={'>'}
//                     leftChevron={'<'}
//                 >
//                     {this.props.data && this.props.data.map((item, i) =>
//                         <div className="col-12" key={i}>
//                             <MediaCard title={item}/>
//                         </div>
//                     )}
//
//                 </ItemsCarousel>
//             </div>
//         );
//     }
// }
// Test.propTypes = {
//     data: PropTypes.array.isRequired
// };
import React from "react";
import "./../../../Styles/slider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MediaCard from "../Card/Card";
import PropTypes from "prop-types";
import Content from "../../Content/Content";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1500 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 780 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 780, min: 0 },
        items: 1,
    },
    // mobile: {
    //     breakpoint: { max: 423, min: 0 },
    //     items: 1,
    // },
};
export default class Slider extends React.Component {

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });
    }

    render() {
        return (
            <Carousel responsive={responsive}>
                {this.props.data.map((item, i) =>
                        <div className="col-12 p-0" key={i}>
                        <MediaCard title={item}/>
                    </div>
                )}
            </Carousel>
        )
    }
}
Slider.propTypes = {
    data: PropTypes.array.isRequired,
};



