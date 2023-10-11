import ImageSlider from './ImageSlider';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

return {
  data: state.servicesData.itemProductData
}
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ImageSliderContainer = connect(mapStateToProps, mapDispatchToProps)
(ImageSlider);

export default ImageSliderContainer;