import React from 'react';
import BlogList from './BlogList';

const posts = [
  {
    text: 'Во сне долго искал по городу общественный туалет. К счастью, не нашёл.',
    image: { src: 'pic1.png', width: 100, height: 100, alt: 'pic1' },
    meta: {
      author: 'Веня',
      createdAt: '25-12-2016 18:30:26',
      updatedAt: '25-12-2016 18:30:26',
      rating: 3
    }
  },
  {
    text: 'Проблема наших депутатов заключается в том, что они принимают законы, а им надо принимать лекарства.',
    image: { src: 'pic2.png', width: 100, height: 100, alt: 'pic2' },
    meta: {
      author: 'Оля',
      createdAt: '25-12-2016 19:45:12',
      updatedAt: '25-12-2016 19:45:12',
      rating: 7
    }
  },
  {
    text: 'Учащиеся консерватории на переменах бегают за здание попеть Боба Марли.',
    image: { src: 'pic3.png', width: 100, height: 100, alt: 'pic3' },
    meta: {
      author: 'Константин',
      createdAt: '25-12-2016 20:01:59',
      updatedAt: '25-12-2016 20:01:59',
      rating: 4
    }
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {
    const { posts } = this.state;
    return <BlogList {...posts} />;
  }
}

export default BlogPage;
