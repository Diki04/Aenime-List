import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }
  const handlePrevPage = () => {
    // if (page > 1) { salah satu cara supaya tidak bisa prev jika < 1
    setPage((prevState) => prevState - 1)
    scrollTop()
  }
  // }



  return (
    <div className='flex justify-center items-center py-4 px-2 gap-5 text-color-primary text-2xl'>
      {page <= 1 ? null :
        <button onClick={handlePrevPage} className='transition-all hover:text-color-accent'>Prev</button>
      }
      <button onClick={() => setPage(1)} className='transition-all hover:text-color-accent md:absolute left-80'>Go to First Page</button>
      <p>{page} of {lastPage}</p>
      {page >= lastPage ? null :
        <button onClick={handleNextPage} className='transition-all hover:text-color-accent'>Next</button>
      }
      <button onClick={() => setPage(lastPage)} className='transition-all hover:text-color-accent md:absolute right-80'>Go to Last Page</button>
    </div>
  )
}

export default Pagination
