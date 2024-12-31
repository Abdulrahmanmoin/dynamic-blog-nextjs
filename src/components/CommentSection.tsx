import Image from "next/image"

interface Comment {
  id: number
  name: string
  position: string
  company: string
  date: string
  rating: number
  content: string
  image: string
}

interface CommentText {
  commentText: string
}



export default function CommentSection({commentText}: CommentText) {

    const comments: Comment[] = [
        {
          id: 1,
          name: "Alex Stanton",
          position: "CEO",
          company: "Bukalapak",
          date: "21 July 2022",
          rating: 4,
          content: commentText,
          image: "/images/elon-musk.png"
        },
      ]

  return ( 
    <>
    { commentText &&
    <div className="p-4 md:p-6 text-black ">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-semibold">Comments</h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
            13
          </span>
        </div>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 bg-white rounded-xl shadow-sm md:p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={comment.image}
                    alt={comment.name}
                    width={48}
                    height={48}
                    className="rounded-full "
                  />
                  <div>
                    <h3 className="font-semibold">{comment.name}</h3>
                    <p className="text-sm text-gray-500">
                      {comment.position} at {comment.company}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>

            

              <p className="text-gray-600 line-clamp-3 md:line-clamp-none">
                {comment.content }
              </p>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors">
          Show All
        </button>
      </div>
    </div>}
    </>
  )
}