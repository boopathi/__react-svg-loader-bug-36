import React from 'react';
import './style.css';
import imageUrl from './image.jpg';
import ImageIcon from './image.svg';
import imageContent from './image.png';

export default class MyComponent extends React.Component {
  render() {
    return <div>
      <ImageIcon className="my-image" />
    </div>
  }
}
