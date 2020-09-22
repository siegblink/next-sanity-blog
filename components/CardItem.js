import Link from 'next/link'
import { Card } from 'react-bootstrap'

function CardItem(props) {
  const { title, subtitle, date, image, author, link } = props

  return (
    <Card className={`fj-card`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          <div>
            <Card.Title className='font-weight-bold mb-1'>
              {author?.name || 'No name'}
            </Card.Title>
            <Card.Text className='card-date'>
              {new Date(date)?.toLocaleDateString()}
            </Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          <Card.Img src={image} alt='Card image cap' />
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  )
}

export default CardItem
