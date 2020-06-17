import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class Test extends React.Component {

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        setTimeout(() => {
            this.setState({
                children: createChildren(20),
            })
        }, 100);
    }

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#233' }}>{i}</div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <div style={{"padding":"0 60px","maxWidth":"100%","margin":"0 auto"}}>
                <ItemsCarousel
                    infiniteLoop={false}
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={60}
                    disableSwipe={false}
                    alwaysShowChevrons={false}
                    numberOfCards={3}
                    slidesToScroll={3}
                    outsideChevron={true}
                    showSlither={false}
                    firstAndLastGutter={false}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                    rightChevron={'>'}
                    leftChevron={'<'}
                >
                    {Array.from(new Array(10)).map((_, i) =>
                        <div
                            key={i}
                            style={{
                                height: 200,
                                width:"100%",
                                backgroundRepeat: "none",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                background: 'url(https://placeimg.com/380/200/nature)'
                            }}
                        />
                    )}
                </ItemsCarousel>
            </div>
        );
    }
}
