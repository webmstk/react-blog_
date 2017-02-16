import React from 'react';
import BlogList from './BlogList';
import PieCart from '/.PieChart';
import _, { cloneDeep } from 'lodash';

const posts = [
  {
    id: 0,
    title: 'Проблема сна',
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
    id: 1,
    title: 'Законы и таблетки',
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
    id: 2,
    title: 'Bad boys',
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
    this.like = this.like.bind(this);
  }

  like(post_id) {
    const posts = cloneDeep(this.state.posts);
    const newPosts = posts.map(item => {
      if (item.id == post_id) {
        item.meta.rating = item.meta.rating + 1;
      }

      return item;
    });

    this.setState({ posts: newPosts });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <BlogList posts={posts} like={this.like} />
        <PieChart columns={
            posts.map(el => [el.title, el.meta.rating])
          }
        />
      </div>
    );
  }
}

export default BlogPage;
