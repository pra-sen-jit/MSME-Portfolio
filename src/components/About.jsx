import React from 'react'

function About() {
  return (
    <div className='about w-full h-screen bg-white'>
        <div className='heading flex justify-center py-5'>
            <h1 className='text-3xl text-amber-800'>About Magrahat Silver Filigre Cluster</h1>
        </div>
        <div className='body flex justify-between'>
            <img className='w-86 h-86 cover mx-20 my-3 rounded-3xl' src="https://blog.acsilver.co.uk/wp-content/uploads/2022/08/silversmith-restoring-silver-cup-in-workshop-2022-03-04-02-20-39-utc-1024x576.jpg" alt="" />
            <div>
                <p className='text-1xl text-black my-3'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae velit asperiores sint, sequi deleniti veniam iusto adipisci ipsam atque minus ullam maiores aperiam provident aspernatur fugit quidem? Cumque, inventore itaque. In possimus aperiam quis tempora repellendus eligendi quisquam eaque illo doloribus nemo sequi ipsam magnam natus, consequatur nulla eos. <br /><br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, culpa consectetur labore totam animi, tenetur, illo voluptatem tempore commodi laboriosam fugiat eaque numquam! Illum nemo, rerum molestias quis nam deleniti, repellendus dolores quos quisquam aspernatur obcaecati numquam. Fuga quidem id itaque.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About