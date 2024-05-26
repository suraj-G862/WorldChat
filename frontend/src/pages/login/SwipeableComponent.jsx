import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../../components/signup/Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: '90vh',
  },
  slide: {
    padding: 15,
    color: '#fff',
    height: '90vh',
  },
  // slide1: {
  //   backgroundColor: '#FEA900',
    
  // },
  // slide2: {
  //   backgroundColor: '#B3DC4A',
  // },
  // slide3: {
  //   backgroundColor: '#6AC0FF',
  // },
};

class DemoAutoPlay extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide)} className='bg-blue-400 flex justify-center items-center p-24 rounded-lg'>
            <div> 
               <div className='w-400'><img src="/Frame.png" alt="" /></div>
               <div className=' text-sm opacity-70 mt-5'>Share</div>
               <div className=' text-2xl'>Share your smile with the World and your <br/> friends.</div>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide)} className='bg-blue-400 flex justify-center items-center p-24 rounded-lg'>
            <div>
               <div className='w-400'><img src="/Frame2.png" alt="" /></div>
               <div className=' text-sm opacity-70 mt-5'>Discover</div>
               <div className=' text-2xl'>Discover new people, create new connections  <br/> and make new friends.</div>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide)} className='bg-blue-400 flex justify-center items-center p-24 rounded-lg'>
            <div>
               <div className='w-400'><img src="/Frame3.png" alt="" /></div>
               <div className=' text-sm opacity-70 mt-5'>100% Privacy</div>
               <div className=' text-2xl'>You have full control over your personal <br/>information that you share.</div>
            </div>
          </div>
        </AutoPlaySwipeableViews>
        <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} className='bg-blue-400' />
      </div>
    );
  }
}

export default DemoAutoPlay;