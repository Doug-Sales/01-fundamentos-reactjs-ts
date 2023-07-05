import './global.css';

import styles from './App.module.css'

import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Doug-Sales.png',
      name: 'Douglas Medeiros',
      role: 'Fullstack IBM',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é PagePost 🚀' },
      { type: 'link', content: '👉 douglas.developer/fullstack' },
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/aykutarici.png',
      name: 'Luis',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é PagePost 🚀' },
      { type: 'link', content: '👉 luis.developer/WEB' },
    ],
    publishedAt: new Date('2023-05-10 21:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />)
          })}
        </main>
      </div>

    </div>
  )
}


