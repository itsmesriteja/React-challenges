import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Image() {
  const [images, setImages] = useState([])
  const [currentimage, setCurrentimage] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          'https://picsum.photos/v2/list?page=1&limit=5',
        )
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          setImages(data)
          setCurrentimage(data[0])
        } else {
          setError('Req failed!')
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImages()
  }, [])

  const handleRight = (index) => {
    console.log(images.length, index)
    if (index >= images.length - 1) {
      setCurrentimage(images[0])
    } else {
      setCurrentimage(images[index + 1])
    }
  }

  const handleLeft = (index) => {
    if (index === 0) {
      setCurrentimage(images[images.length - 1])
    } else {
      setCurrentimage(images[index - 1])
    }
  }

  return (
    <div className="container">
      <button>
        <FaArrowLeft onClick={() => handleLeft(parseInt(currentimage.id))} />
      </button>
      <img
        style={{ height: '100px', width: '100px' }}
        src={currentimage.download_url}
        alt={currentimage.author}
        key={currentimage.id}
      />
      <button>
        <FaArrowRight onClick={() => handleRight(parseInt(currentimage.id))} />
      </button>
    </div>
  )
}

export default Image
