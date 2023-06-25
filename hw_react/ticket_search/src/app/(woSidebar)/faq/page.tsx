import { Question } from '@/components/Question/Question'
import styles from './page.module.css'

const faqs = [
  {
    question: 'Что такое Билетопоиск?',
    answer: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
  },
  {
    question: 'Какой компании принадлежит Билетопоиск?',
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus commodi, soluta et nemo rem facilis quos molestias adipisci repellendus mollitia laboriosam corrupti hic repudiandae. Perferendis adipisci fugiat et magni delectus!'
  },
  {
    question: 'Как купить билет на Билетопоиск?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat deleniti optio fugiat porro modi accusantium veritatis, iure suscipit, impedit odit quod quae consequuntur praesentium facilis nam quisquam harum voluptas.'
  },
  {
    question: 'Как оставить отзыв на Билетопоиск?',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nesciunt harum! Officia quisquam enim provident tenetur quod illo facilis minus ipsam doloribus perferendis? Facilis expedita eveniet beatae, similique velit inventore?'
  },
]

export default function Faq() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Вопросы-ответы</h2>
      {faqs.map((faq, i) => (
        <Question key={`faq-${i}`} question={faq.question} answer={faq.answer} />
      ))}
    </main>
  )
}
